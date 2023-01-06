import {Link, Outlet} from "react-router-dom";
import {Nav} from '../Utils'


const MyMenu = () => (
  <Nav>
    <Link to="/">Accueil</Link>
    <Link to="/personnages">Voir tout les personnages</Link>
    <Link to="/episodes">Voir tout les épisodes</Link>
    <Link to="/favoris">Voir mes personnages favoris</Link>
  </Nav>
);

export const Menu = () => {
  return (
    <>
      <MyMenu/>
        <Outlet/>
    </>
  );
}