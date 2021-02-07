//initial state
export const initialState = {
  favourites: [],
};

//Reducer function to handle actions
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites, action.payload.favArray[0]],
      };

    case "REMOVE_FROM_FAVOURITES":
      let copyFavourites = [...state.favourites];
      let index = state.favourites.findIndex(
        (item) => item.id === action.payload.id
      );
      index >= 0
        ? copyFavourites.splice(index, 1)
        : console.error(
            `Could not find the element with ${index} from the basket`
          );
      return {
        ...state,
        favourites: [...copyFavourites],
      };

    default:
      return state;
  }
};
