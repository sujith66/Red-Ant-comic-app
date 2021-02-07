import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "../axios";
import MarvelHero from "../MarvelHero/MarvelHero";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";
import { useStateValue } from "../Context/ContextProvider";
import ls from 'local-storage';

//Styles for loader
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = () => {
    const [{favourites}, dispatch] = useStateValue();
  const [heroList, setHeroList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const Favourites = ls.get('favourites');
      const favItem = ls.get('isFavourite')
    const fetchComicsData = async () => {
        let heroListArray = [];
        try {
          const response = await axios.instance.get(
            `/public/comics?ts=100&apikey=288cdc0b249d34fd6efa9b276567a213&hash=${axios.hash}`
          );
          response.data.data.results.map((hero) => {
            heroListArray.push({
              id: hero.id,
              image: `${hero.thumbnail.path}/portrait_medium.${hero.thumbnail.extension}`,
              isFavourite: false
            });
          });
        
          setHeroList(heroListArray);
          setLoading(loading => !loading);

        } catch (error) {
          console.error("error", error);
        }
      };
    fetchComicsData();
    
  }, []);

  

  return (
    <div className="home">
      <div className="home__wrapper">
        {heroList.map((item) => (
            
            <div className="home__cardItem">
         {favourites.some(ele => item.id === ele.id) ? <MarvelHero key={item.id} list={item} favourite={true}/> : <MarvelHero key={item.id} list={item} favourite={false}/> }
          </div>
        ))}
        
      </div>
      <BarLoader color={'red'} loading={loading} css={override} size={150} />
    </div>
  );
};

export default Home;
