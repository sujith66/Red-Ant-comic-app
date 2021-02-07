import React, {useState} from "react";
import proptypes from "prop-types";
import { useStateValue } from "../Context/ContextProvider";
import "./MarvelHero.css";



const MarvelHero = ({ list, IsFavourite }) => {

    const [, dispatch] = useStateValue();
    const [isFavouriteHero, setFavouriteHero] = useState(false);
   

      const handleFavourties = ()=>{
        let favArray = [];
        setFavouriteHero(!isFavouriteHero);
        if(isFavouriteHero || IsFavourite){
            dispatch({
                type: "REMOVE_FROM_FAVOURITES",
                payload: {
                    id: list.id
                }
            });
        } else {
            favArray.push({
                id: list.id,
                image: list.image,
                isFavouriteHero
            })
            dispatch({
                type: "ADD_TO_FAVOURITES",
                payload: {
                    favArray
                }
            });
        }
        
      }

    return (
    <div className="hero">
        <div className="hero__wrapper">
          <div className="hero__image">
            <img src={list.image} alt="hero" />
          </div>
          <div className="hero__fav">
              <button onClick={handleFavourties}>{(isFavouriteHero || IsFavourite) ?  <span>Remove from favourites</span>  : <span>Add to favourites</span>}</button>
          </div>
        </div>
    </div>
  );
};
MarvelHero.propTypes = {
    list: proptypes.array,
    IsFavourite: proptypes.bool,
}
export default MarvelHero;
