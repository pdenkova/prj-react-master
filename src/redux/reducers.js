import actionTypes from "./action-types";
import { combineReducers } from "redux";

export function listView (state = true, action) {
    switch (action.type) {
      case actionTypes.SET_LIST_VIEW:
        return action.payload;
      default:
        return state
    }
  }

  
export function recipes (state = [], action) {
    switch (action.type) {
      case actionTypes.SET_RECIPES:
        return [...action.payload];
      default:
        return state
    }
  }

  export function favoriteRecipes(state = [], action) {
    switch (action.type) {
      case actionTypes.ADD_FAVORITE_RECIPE:
        return [...state, action.payload];
      case actionTypes.REMOVE_FAVORITE_RECIPE:
        return state.filter(recipe => action.payload.id !== recipe.id);
      case actionTypes.SET_FAVORITE_RECIPE:
        return [...action.payload];
      default: 
        return state
    }
  }

  export default combineReducers({ listView, recipes, favoriteRecipes, });