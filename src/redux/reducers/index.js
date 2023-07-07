import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER } from "../actions/types";

const initialGlobalState = {
  allCharacters: [],
  favorites: [],
  characters: [],
  access: false,
  aunMas: [],
  detail: {}
};

export default function rootReducer(state = initialGlobalState, action) {
  switch (action.type) {
    case ADDFAVORITE:
      const updatedState = { ...state, allCharacters: [...state.allCharacters, action.payload] };
      return updatedState;

    case DELETEFAVORITE:
      const filteredFavorites = state.allCharacters.filter((fav) => fav.id !== action.payload);
      return { ...state, allCharacters: filteredFavorites };

    case FILTER:
      const filteredCharacters = state.characters.filter((char) => char.gender === action.payload);
      return { ...state, allCharacters: filteredCharacters };

    case ORDER:
      const sortedCharacters = [...state.allCharacters];
      sortedCharacters.sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        }
      });
      return { ...state, allCharacters: sortedCharacters };

    default:
      return state;
  }
}


