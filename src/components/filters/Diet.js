import { Form } from "react-bootstrap";
import {useRecipe} from "../recipes/RecipeContext";

function Diet(props) {

    const {checkedDiet, setCheckedDiet} = useRecipe();

    function handleChange(index) {
        checkedDiet[index] = !checkedDiet[index]
        setCheckedDiet(checkedDiet);
    }

    function getDiets() {
       return props.diets.map((dietcheck, index) => {
            return <Form.Group 
                key = {dietcheck.value}
                controlId={`checkbox-${dietcheck.id}`}>
                      <Form.Check 
                        value ={checkedDiet[index]}
                        onChange ={() => handleChange(index)}
                        type="checkbox" 
                        label={dietcheck.title} />
            </Form.Group>
        })
    }

    return (
        <Form.Group
            className="mb-3" 
            controlId="filterForm.DietCheckBox">
            <Form.Label>Тип диета</Form.Label>
                {getDiets()}
        </Form.Group>
       
    )
}
export default Diet;