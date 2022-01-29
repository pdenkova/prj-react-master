import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";

export function setListView(value) {
    return {
        type: actionTypes.SET_LIST_VIEW,
        payload: value,
    }
}

export function setRecipes(value) {
    return {
        type: actionTypes.SET_RECIPES,
        payload: value,
    }
}

export function getRecipes(path, params) {
    return async (dispatch) => {
        try {
            axios.get(`${constants.baseUrl}${path}`, {
                   params: {...params, apiKey: constants.apiKey}
            })
                .then(response => {
                    dispatch(setRecipes(response.data.results));
            })
            
        }catch (error) {
            console.log(error);
        }
    }
}

export function addFavoriteRecipe(recipe) {
    return {
        type: actionTypes.ADD_FAVORITE_RECIPE,
        payload: recipe,
    }
}

export function removeFavoriteRecipe(recipe) {
    return {
        type: actionTypes.REMOVE_FAVORITE_RECIPE,
        payload: recipe,
    }
}

export function setFavoriteRecipe(recipe) {
    return {
        type: actionTypes.SET_FAVORITE_RECIPE,
        payload: recipe,
    }
}
