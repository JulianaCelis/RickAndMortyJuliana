import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER } from "./types";

export function addFavorite(objCharacter) {
  return { type: ADDFAVORITE, payload: objCharacter };
}

export function deleteFavorite(id) {
  return { type: DELETEFAVORITE, payload: id };
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
