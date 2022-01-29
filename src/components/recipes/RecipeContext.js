import React, { useContext, useState } from "react";
import axios from 'axios';
import constants from '../../constants'

const RecipeContext = React.createContext();

export function useRecipe() {
    return useContext(RecipeContext);
}

export function RecipeProvider(props) {

    const[selectedSortBy, setSelectedSortBy] = useState("popularity");
    const[selectedSortType, setSelectedSortType] = useState("appetizers");
    const [checkedCuisine, setCheckedCuisine] = useState(
        new Array(7).fill(false)
    );
    const [checkedDiet, setCheckedDiet] = useState(
        new Array(5).fill(false)
    );

    const[listView, setListView] = useState(true);

    const[recipes, setRecipes] = useState([]);

    function fetchRecipes(path, params) {
        axios.get(`${constants.baseUrl}${path}`, {
            params: {...params, apiKey: constants.apiKey}
        })
        .then(response => {
            setRecipes(response.data.results);
        })
    }

    return (
        <RecipeContext.Provider value = {{
            selectedSortBy, 
            setSelectedSortBy,
            selectedSortType,
            setSelectedSortType,
            checkedCuisine,
            setCheckedCuisine,
            checkedDiet,
            setCheckedDiet,
            recipes,
            setRecipes,
            fetchRecipes,
            listView,
            setListView,
            }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
export default RecipeContext;