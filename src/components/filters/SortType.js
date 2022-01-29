import {Form } from "react-bootstrap";
import { useRecipe } from '../recipes/RecipeContext';

function SortType(props) {
    
    const{selectedSortType, setSelectedSortType} = useRecipe();

        const types = [
            {
                value: "appetizers",
                title: "Предястия",
            },
            {
                value: "mainmeal",
                title: "Основни",
            },
            {
                value: "breakfast",
                title: "Закуски",
            },
            {
                value: "soups",
                title: "Супи",
            },
            {
                value: "salads",
                title: "Салати",
            },
            {
                value: "desserts",
                title: "Десерти",
            },
        ]
    
        function getTypes() {
            return types.map(type => {
                return <option 
                key = {type.value}
                value={type.value}>{type.title}</option>
            })
        }
    
        return (
            <Form.Group className="mb-3" controlId="filterForm.ControlSortBy">
                <Form.Label>Изберете вид на ястието</Form.Label>
                <Form.Select
                    value = {selectedSortType}
                    onChange = {e => setSelectedSortType(e.target.value)}>
                    {getTypes()}
                </Form.Select>
          </Form.Group>
    
        )
    
}
export default SortType;