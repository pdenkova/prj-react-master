import { Form } from "react-bootstrap";
import {useRecipe} from "../recipes/RecipeContext";

function Cuisine(props) {

    const {checkedCuisine, setCheckedCuisine} = useRecipe();

    function handleChange(index) {
        checkedCuisine[index] = !checkedCuisine[index]
        setCheckedCuisine(checkedCuisine);
    }

    function getCuisines() {
       return props.cuisines.map((cuisinecheck, index) => {
            return <Form.Group 
                key = {cuisinecheck.value}
                controlId={`checkbox-${cuisinecheck.id}`}>
                      <Form.Check 
                        value= {checkedCuisine[index]}
                        onChange= {() => handleChange(index)}
                        type="checkbox" 
                        label={cuisinecheck.title} />
            </Form.Group>
        })
    }

    return (
        <Form.Group
            className="mb-3" 
            controlId="filterForm.CuisineCheckBox">
            <Form.Label>Изберете кухня</Form.Label>
                {getCuisines()}
        </Form.Group>
       
    )
}
export default Cuisine;