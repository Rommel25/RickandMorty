import {Episode as CustomEpisode} from "./ListeEpisodes";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
const APIKEY = "https://rickandmortyapi.com/api/episode/";


export const getEpisodes = async (ids) => (await fetch(`https://rickandmortyapi.com/api/episode/[${ids.join(",")}]`)).json();

export const Episode = () => {
  const {id} = useParams();
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    getEpisodes([id]).then(([ep]) => setEpisode(ep));
  }, [id]);

  return <CustomEpisode episode={episode} defaultOpen/>;
}