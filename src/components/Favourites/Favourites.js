import React from "react";
import { useStateValue } from "../Context/ContextProvider";
import MarvelHero from "../MarvelHero/MarvelHero";
import _ from "lodash";
import "./Favourites.css";

const Favourites = () => {
  const [{ favourites }, dispatch] = useStateValue();
  return (
    <div className="favourite">
      <div className="favourite__wrapper">
        {_.isEmpty(favourites) ? (
          <p className="favourite__message">Favourties are empty</p>
        ) : (
          favourites.map((item) => (
            <div className="favourite__cardItem">
              <MarvelHero key={item.id} list={item} favourite={true} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favourites;
