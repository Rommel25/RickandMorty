import {useEffect, useState} from "react";
import {PetiteCarte} from "./Personnage";
import { Titre, usePersonnages, ButtonNavigation, ListContainer, ContainerListeEpisode} from "../Utils";
const APIKEY = "https://rickandmortyapi.com/api";





const List = ({episodes}) => {
  return (
    <ListContainer>
      {episodes.length === 0 }
      {episodes.map(episode =>
        <Episode
          key={episode.id}
          episode={episode}
        />
      )}
    </ListContainer>
  );
};



export const Episode = ({episode, defaultOpen}) => {
  const [open, setOpen] = useState(!!defaultOpen);
  const width = 300;
  return (
      <div>
      <Titre
        onClick={() => setOpen(o => !o || defaultOpen)}
        style={{cursor: "pointer"}}
        small={!defaultOpen}

      >
        {episode.episode} - {episode.name}
      </Titre>

        <div style={{margin: "5px", justifyContent: "center", alignItems: "center"}}>
          <p>Date de sortie: {episode.air_date}</p>
          <p>Liste des  {episode.characters.length} personnages :</p>
          <PersonnagesPresent urls={episode.characters} card={width >= 300} defaultOpen={defaultOpen} />
        </div>
      </div>
  );
};

const PersonnagesPresent = ({urls, card}) => {
  const [personnages, setPersonnages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const {getPersonnages} = usePersonnages();

  const load = () => {
    if (loaded || loading) return;
    setLoading(true);
    getPersonnages(urls.map(u => u.split("/").pop())).then((persos) => {
      setPersonnages(persos);
      setLoading(false);
      setLoaded(true);
    });
  };
  useEffect(load, [urls]);


  return (
    <div>
      {personnages.length > 0 && (
        <ContainerListeEpisode>
          {personnages.map(perso => <PetiteCarte perso={perso} card={card} key={perso.id}/>)}
        </ContainerListeEpisode>
      )}
    </div>
  );
};



export const ListeEpisodes = () => {
  const [link, setLink] = useState(`${APIKEY}/episode`);
  const getData = async () => (await fetch(link)).json();
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState({});
  useEffect(() => {
    getData().then(({info, results}) => {
      setEpisodes(results);
      setInfo(info);
    });
  }, [link]);
  return <>
    <div>
      <Titre>Episodes de RicK&Morty</Titre>
      <List episodes={episodes}/>
      <ButtonNavigation infos={info} setLink={setLink}/>
    </div>
  </>
}


