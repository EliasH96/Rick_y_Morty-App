import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET } from "./action_type";

export function addFavorites(ch) {
  return {
    type: ADD_FAVORITES,
    payload: ch,
  };
}

export function deleteFavorites(id) {
    return {
      type: DELETE_FAVORITES,
      payload: id,
    };
  }

  export function filterCards(status) {
    return {
      type: FILTER,
      payload: status,
    };
  }
  export function orderCards(order) {
    return {
      type: ORDER,
      payload: order,
    };
  }

  export function reset() {
    return {
      type: RESET,
    };
  }

  /*
  Crear una action-creator con el nombre "filterCards". Esta action-creator recibirá por parámetro un status. 
  La action que retornará tendrá un type llamado "FILTER", y dentro del payload irá el género recibido.

Crear una action-creator con el nombre "orderCards". Esta action-creator recibirá por parámetro un id. 
La action que retornará tendrá un type llamado "ORDER", y dentro del payload irá el id recibido.
  */