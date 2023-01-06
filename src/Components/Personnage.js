import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEpisodes} from "./Episode";
import {Titre, MyLink, usePersonnages, PersoContainer, ContainerPersonnage, SousTitre, StyleCartePersonnage} from "../Utils";



const Carte = ({personnage}) => (
  <StyleCartePersonnage>
    <MyLink to={`/personnages/${personnage.id}`}>
      {personnage.name}
    </MyLink>
    <img src={personnage.image} alt={""}/>
    <p>Sexe : {personnage.gender}</p>
    <p>Espèce : {personnage.species}</p>
    {personnage.type && <p>Type : {personnage.type}</p>}
      <p>Status: {personnage.status}</p>
  </StyleCartePersonnage>
);



export const PetiteCarte = ({perso, card}) => card ? (
  <Carte personnage={perso}/>
) : (
  <PersoContainer>
    <img src={perso.image} style={{width: "250px", height: "250px"}}/>
    <div>
      <MyLink to={`/personnages/${perso.id}`}>{perso.name}</MyLink>
      <p>{perso.species}</p>
    </div>
  </PersoContainer>
);
//Pour gérer les perso mis en fav
//Coeur vide si pas fav, coeur rouge plein si fav


export const Personnage = () => {
    const {getPersonnages} = usePersonnages();
    const {id} = useParams();
    const [perso, setPerso] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const load = async () => {
        const [p] = await getPersonnages([id]);
        setPerso(p);
        setEpisodes(await getEpisodes(p.episode.map(e => +e.split("/").pop())));
    };

    useEffect(() => {
        setLoading(true);
        load().then(() => setLoading(false));
    }, [id]);
    return (
        <>
            {perso &&  (
                <ContainerPersonnage>
                    <Link to={`/personnages/${perso.id}`}><Titre>{perso.name}</Titre></Link>
                        <img src={perso.image} alt={""} style={{maxWidth: "300px", height: "auto" }}/>
                    <div style={{display: "flex",
                        flexDirection: "column"}}>
                        <div style={{gridColumn: "span 2"}}>
                            <Titre>Infos :</Titre>
                            <SousTitre>Nom</SousTitre>
                            <p>{perso.name}</p>
                            <SousTitre>Statut</SousTitre>
                            <p>{perso.status}</p>
                            <SousTitre>Sexe</SousTitre>
                            <p>{perso.gender}</p>
                            {perso.type && (
                                <>
                                    <SousTitre>Type</SousTitre>
                                    <p>{perso.type}</p>
                                </>
                            )}
                            <SousTitre>Origine</SousTitre>
                        <p>{perso.origin.name}</p>

                        </div>
                    </div>
                        <div style={{display: "flex",
                            flexDirection: "column"}}>
                        {episodes?.length > 0 && (
                            <div>
                                <Titre>Présent des les épisodes : </Titre>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    {episodes.map((ep) => (
                                        <MyLink style={{marginBottom: ".5rem"}} to={`/episodes/`} key={ep.id}>{ep.episode} - {ep.name} ({ep.air_date})</MyLink>
                                    ))}
                                </div>
                            </div>
                        )}
                        </div>

                </ContainerPersonnage>
            )}
        </>
    );
};



