import {Titre, ContainerPersoFav} from "../Utils";
import {Link} from "react-router-dom";


export const PersonnageFavoris = () => {

    return (
        <ContainerPersoFav>
            <Titre>Mes personnages favoris</Titre>
            <p>Vous n'avez actuellement aucun personnage</p>
            <Link to={'/personnages'}>Voir les personnages</Link>
        </ContainerPersoFav>
    );
}
export default PersonnageFavoris

