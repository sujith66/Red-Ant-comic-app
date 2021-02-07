import React, {useState} from "react";
import proptypes from "prop-types";
import { useStateValue } from "../Context/ContextProvider";
import "./MarvelHero.css";



const MarvelHero = ({ list, favourite }) => {

    const propTypes = {
        list: proptypes.array.isRequired,
        favourite: proptypes.bool.isRequired
      };

    const [{}, dispatch] = useStateValue();
    const [isFavourite, setFavourite] = useState(false);
   

      const handleFavourties = ()=>{
        let favArray = [];
        
        setFavourite(!isFavourite);
        if(isFavourite || favourite){
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
                isFavourite
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
              <button onClick={handleFavourties}>{(isFavourite || favourite) ?  <span>Remove from favourites</span>  : <span>Add to favourites</span>}</button>
          </div>
        </div>
    </div>
  );
};

export default MarvelHero;
