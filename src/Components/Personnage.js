import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEpisodes} from "./Episode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {
    Titre,
    MyLink,
    getAllPersonnage,
    PersoContainer,
    ContainerPersonnage,
    SousTitre,
    StyleCartePersonnage
} from "../Utils";


const Carte = ({personnage, isLoggedIn, isFavourite, handleFavourite}) => (
    <StyleCartePersonnage>
        <MyLink to={`/personnages/${personnage.id}`}>
            {personnage.name}
        </MyLink>
        <img src={personnage.image} alt={""}/>
        <p>Sexe : {personnage.gender}</p>
        <p>Espèce : {personnage.species}</p>
        {personnage.type && <p>Type : {personnage.type}</p>}
        <p>Status: {personnage.status}</p>
        {isLoggedIn && (
            <FontAwesomeIcon
                icon={faHeart}
                style={{cursor: "pointer"}}
                onClick={handleFavourite}
                className={`heart-icon ${isFavourite ? "favourite" : ""}`}
            />
        )}
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

const Outline = styled.div`
  padding: 1rem 1.7rem;
  border: 1px solid;
  border-radius: 12px;
  margin: 1rem;
  text-align: center;
  > h1{
    margin: 0;
    padding: 1rem 1rem 1.5rem 1rem;
    border-bottom: 1px solid;
  }
  >p {
    margin: 0;
    padding: 0;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: underline;
  color: green;
  &:hover {
    color: blue;
  }
  display: inline;
`;


export const Personnage = () => {
    const {getPersonnages} = getAllPersonnage();
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
            {perso && (
                <ContainerPersonnage>
                    <Link to={`/personnages/${perso.id}`}><Titre>{perso.name}</Titre></Link>
                    <img src={perso.image} alt={""} style={{maxWidth: "300px", height: "auto"}}/>
                    <div style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
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
                    <div style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        {episodes?.length > 0 && (
                            <Outline style={{gridColumn: "span 2"}} >
                                <Titre style={{marginBottom: "1.2rem"}} small>Apparitions</Titre>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    {episodes.map((e) => (
                                        <CustomLink style={{marginBottom: ".5rem"}} to={`/episode/${e.id}`} key={e.id}>{e.name}</CustomLink>

                                        ))}
                                </div>
                            </Outline>
                        )}
                    </div>

                </ContainerPersonnage>
            )}
        </>
    );
};



