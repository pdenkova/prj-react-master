import {Card, Row, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import NoResults from "./NoResults";
import RecipeGridItem from "./RecipeGridItem";
import { setFavoriteRecipe } from "../../redux/actions";

function FavoritesList(props) {

    const dispatch = useDispatch();
    const favoriteRecipes = useSelector(state => state.favoriteRecipes);

    function renderFavoriteRecipes() {
        if(!favoriteRecipes.length) {
            return <NoResults title = {'Няма добавени любими рецепти'}/>
        }
        return favoriteRecipes.map( recipe => {
            return <RecipeGridItem key = {recipe.id} recipe={recipe}/>
        });
    }

    function clearAllFavorites() {
        dispatch(setFavoriteRecipe([]))
    }

    return (
        <Card>
            <Card.Body>
                Списък с любими рецепти:
                <Button className="button-clear"
                onClick={() => clearAllFavorites()}
                variant="link">Изчисти всички</Button>
                <Row>
                {renderFavoriteRecipes()}
                </Row>
            </Card.Body>
        </Card>
    )
}
export default FavoritesList;