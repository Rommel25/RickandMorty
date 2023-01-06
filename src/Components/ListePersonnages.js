import {Titre, ButtonNavigation, ContainerListePersonnage} from "../Utils";
import {useEffect, useState} from "react";
import {PetiteCarte} from "./Personnage";

const APIKEY = "https://rickandmortyapi.com/api";

//Avoir tout les personnages pour la pages /personnages
export const ListePersonnages = () => {
    const [loading, setLoading] = useState(false);
    const [personnages, setPersonnages] = useState([]);
    const [info, setInfo] = useState({});
    const [link, setLink] = useState(`${APIKEY}/character`);
    const width = 500;

    const load = async () => {
        const {info, results} = await (await fetch(link)).json();
        setInfo(info);
        setPersonnages(results);
    }

    useEffect(() => {
        if (loading) return;
        setLoading(true);
        load().then(() => setLoading(false));
    }, [link]);
    //Affichage de la petite carte
    return (
        <>
            <Titre>Personnages de Rick&Morty</Titre>
            <>
                <ContainerListePersonnage>
                    {personnages.map(perso => <PetiteCarte card={width >= 500} perso={perso} key={perso.id}/>)}
                </ContainerListePersonnage>
                <ButtonNavigation infos={info} setLink={setLink}/>
            </>

        </>
    );
};

