import {useEffect, useState} from "react";
import {Titre, usePersonnages, AccueilContainer,CarteStyle} from "../Utils";
import {PetiteCarte} from "./Personnage";
const APIKEY = "https://rickandmortyapi.com/api/character";


export const Accueil = () => {
  const {getPersonnages} = usePersonnages();
  const [randoms, setRandoms] = useState([]);
  const [loading, setLoading] = useState({favoris: false, persos: false});

  //Utilise l'API pour récupérer les personnages, 5 nbr randoms, on ajoutes ces 5 perso dans notre var random
  const getRandomCharacters = async () => {
    setLoading(l => ({...l, persos: true}));
    const {info, results} = (await fetch(APIKEY).then(r => r.json()));
    const {count} = info;
    const randoms = [];
    for (let i = 0; i < 5; i++) {
      const nbr = Math.floor(Math.random() * count);
      randoms.push(nbr);
    }
    const persos = await getPersonnages(randoms);
    setRandoms(persos.filter(p => p));
    setLoading(l => ({...l, persos: false}));
  };

//Permet d'avoir les 5 random
  useEffect(() => {
    getRandomCharacters().then();
  }, []);
  //Render les personnages dans notre PetiteCarte
  const RenderPersos = ({loading, persos, title, prefix}) => {

    if (persos.length === 0) return null;
    return (
        <CarteStyle>
          <Titre>{title}</Titre>
          <AccueilContainer>
            {persos.map(perso => <PetiteCarte key={`${prefix}_${perso.id}`} perso={perso}/>).reverse()}
          </AccueilContainer>
        </CarteStyle>
    );
  };
  return (
      <>
        <Titre>Accueil</Titre>
        <div style={{display: "flex", flexDirection: "column"}}>
          <RenderPersos loading={loading.persos} prefix="random" persos={randoms} title="5 Personnages aléatoires" />
        </div>
      </>
  );
};




