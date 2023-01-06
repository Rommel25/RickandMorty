import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const APIKEY = "https://rickandmortyapi.com/api";


const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

export const Titre = styled.h1`
  font-size: 25px;
  text-align: center;
  margin: 1rem;
  color: green;
`;

export const Button = styled.button`
  background-color: green;
  color: white;
  padding: 25px 25px;
  text-align: center;
  display: inline-block;
  font-size: 18px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  &:disabled {
    background-color: grey;
  }
`;

export const StyleCartePersonnage = styled.div`
  height: 100%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  position: relative;
`;



export const MyLink = styled(Link)`
  text-decoration: underline;
  color: green;
  &:hover {
    color: blue;
  }
  display: inline;
`;

export const ContainerPersonnage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const PersoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align: center;
`;

export const SousTitre = styled.p`
  color: green;
  font-size: 1.2rem;
  padding: 1rem 0 .5rem 0 !important;
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: green;
  z-index: 1;
  & > * {
    padding: 25px;
    color: white;
     }
`;

export const ContainerPersoFav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 15px;
  padding: 50px;
`;

export const AccueilContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 55px;
  align-items: center;
  justify-content: center;
  width: 1800px;
  margin: 25px;
`;

export const CarteStyle = styled.div`
  margin: auto auto auto auto;
  width: fit-content;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 5rem;
`;


export const ContainerListeEpisode = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;
export const ContainerListePersonnage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 5px;
  padding: 50px;
  margin: 15px
`;

export const Style = {
    mainTheme: {
        background: "#fff",
        color: {
            text: "#000",
            button: {
                text: "#fff",
                disabled: "#ccc",
            },
            card: {
                background: "#f5f5ff",
                shadow: "#aaa"
            },
        },
    },

};




export function usePersonnages() {

    return {
        getPersonnages: async (ids) => {
            return await (await fetch(`${APIKEY}/character/[${ids.join(",")}]`)).json();
        }
    }
}

export const ButtonNavigation = ({infos, setLink}) => (
    <ButtonContainer>
        <Button disabled={!infos.prev} onClick={() => setLink(infos.prev)}>
            Précedent
        </Button>
        <Button disabled={!infos.next} onClick={() => setLink(infos.next)}>
            Suivant
        </Button>
    </ButtonContainer>
);

