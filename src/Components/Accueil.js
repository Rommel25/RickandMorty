import {useEffect, useState} from "react";
import {Titre, getAllPersonnage, AccueilContainer, CarteStyle} from "../Utils";
import {PetiteCarte} from "./Personnage";


export const Accueil = () => {
    const {getPersonnages} = getAllPersonnage();
    const [randoms, setRandoms] = useState([]);
    const [loading, setLoading] = useState([]);

    //Utilise l'API pour récupérer les personnages, 5 nbr randoms, on ajoutes ces 5 perso dans notre var random
    const getRandomCharacters = async () => {
        setLoading(l => ({...l, persos: true}));
        const randoms = [];
        for (let i = 0; i < 5; i++) {
            const nbr = Math.floor(Math.random() * 826);
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
    const RenderPersos = ({persos, title, prefix}) => {

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
                <RenderPersos loading={loading.persos} prefix="random" persos={randoms}
                              title="5 Personnages aléatoires"/>
            </div>
        </>
    );
};




