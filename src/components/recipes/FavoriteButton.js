import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {useSelector, useDispatch} from "react-redux";
import { addFavoriteRecipe, removeFavoriteRecipe } from "../../redux/actions";

function FavoriteButton({recipe}) {

    const dispatch = useDispatch();
    const favoriteRecipes = useSelector(state => state.favoriteRecipes);

    function isInFavorites() {
        return favoriteRecipes.some(favRec => {
            return favRec.id === recipe.id
        });
    }

    function toggleFavorite() {

        
        if(isInFavorites()) {
            dispatch(removeFavoriteRecipe(recipe));
        }else {
            dispatch(addFavoriteRecipe(recipe));
            return;
        }
    }

    return(
        <>
        <FontAwesomeIcon
            className ={`favorite-icon ms-2 ${isInFavorites() ? 'active' : ''}`}
            size = "lg"
            onClick={() => toggleFavorite()}
            icon={faHeart}/>
        </>
    )
}
export default FavoriteButton;