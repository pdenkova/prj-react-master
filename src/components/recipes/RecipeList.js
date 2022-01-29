import RecipeListItem from "./RecipeListItem";
import RecipeGridItem from "./RecipeGridItem";
import NoResults from "../recipes/NoResults";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { setListView } from "../../redux/actions";

function RecipeList(props) {

    const listView = useSelector((state) => state.listView);
    const dispatch = useDispatch();

    const recipes = useSelector((state) => state.recipes);

    function renderRecipes() {

        if(!recipes.length) {
            return <NoResults title={'Няма намерени резултати'}/>
        }

        return listView ? getRecipeListItems() : getRecipeGridItems();
    }

        function getRecipeListItems() {
            return recipes.map(recipe => {
                return <RecipeListItem
                key = {recipe.id}
                recipe = {recipe}
                >
                </RecipeListItem>
            })
        }

        function getRecipeGridItems() {
            return recipes.map(recipe => {
                return <RecipeGridItem
                key = {recipe.id}
                recipe = {recipe}
                >
                </RecipeGridItem>
            })
        }


    return (
        <Card>
            <Card.Body> 
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title>Резултат след филтриране</Card.Title>
                    <ButtonGroup aria-label="List switch">
                        <Button variant={listView ? 'primary' : 'outline-primary'}                            
                            onClick = {() => dispatch(setListView(true))}>
                            <FontAwesomeIcon icon={faList}/>
                        </Button>
                        <Button variant="outline-primary"
                            className = {listView ? 'outline-primary' : 'primary'}
                            onClick = {() => dispatch(setListView(false))}>
                            <FontAwesomeIcon icon={faGripHorizontal}/>
                        </Button>
                    </ButtonGroup>
                </div>
                <hr/>
                <div className ="row">
                     {renderRecipes()}
                </div>
             </Card.Body>
        </Card>
    )
}
export default RecipeList;