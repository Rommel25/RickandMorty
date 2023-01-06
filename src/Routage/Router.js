import React from 'react';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import {Menu} from "../Components/Menu";
import {Personnage} from "../Components/Personnage";
import {ListePersonnages} from "../Components/ListePersonnages";
import {ListeEpisodes} from "../Components/ListeEpisodes";
import {Accueil} from "../Components/Accueil";
import {PersonnageFavoris} from "../Components/PersonnageFavoris";
import {Style} from "../Utils";
import {ThemeProvider} from "styled-components";
import {Episode} from "../Components/Episode";

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
          path: 'episodes',
          element: <ListeEpisodes />,
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
          path: 'favoris',
          element: <PersonnageFavoris />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={Style.mainTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>);
};