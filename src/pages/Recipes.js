import RecipeList from "../components/recipes/RecipeList";
import Filters from "../components/filters/Filters";
import {Col} from "react-bootstrap";
import {RecipeProvider} from "../components/recipes/RecipeContext";


function Recipes(props) {
   
    return (
        
        <RecipeProvider>
            <Col md = {3}>
                <Filters/>
            </Col>
            <Col>
                <RecipeList/>
            </Col>
        </RecipeProvider>

    )
}

export default Recipes;