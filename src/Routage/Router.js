import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet, Route} from 'react-router-dom';
import {Menu} from "../Components/Menu";
import {Personnage} from "../Components/Personnage";
import {ListePersonnages} from "../Components/ListePersonnages";
import {ListeEpisodes} from "../Components/ListeEpisodes";
import {Accueil} from "../Components/Accueil";
import PersonnageFavoris from "../Components/PersonnageFavoris";
import {Style} from "../Utils";
import {ThemeProvider} from "styled-components";
import {Episode} from "../Components/Episode";
import {Login, LoginPage} from "../Components/Connexion"
import {SignupPage} from "../Components/Inscription"
import  PrivateRoute from "../Components/privateRoute";
import {useDispatch, useSelector} from "react-redux";
import {useAuthState} from "../Firebase/init";
import {Account} from "../Components/Account";


const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
      <Route
          {...props}
          render={routeProps =>
              <C {...routeProps} />
          }
      />
  )
}

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Menu/>,
      children: [
        {
          path: '/',
          element: <Accueil />,
        },
        {
          path: "auth",
          element: <Outlet />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "",
              element: <SignupPage/>,
            },
          ],
        },
        {
          path: 'episodes',
          element: <ListeEpisodes />,
        },
        {
          path: 'episode/:id',
          element: <Episode />,
        },
        {
          path: 'personnages',
          element: <ListePersonnages />,
        },
        {
          path: 'personnages/:id',
          element: <Personnage />,
        },

        {
          path: 'account',
          element: <Account/>
        }  ,
         {
           path: 'favoris',
           element: <PersonnageFavoris/>
         }  ,
      ],
    },
  ]);

  return (
    <ThemeProvider theme={Style.mainTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>);
};