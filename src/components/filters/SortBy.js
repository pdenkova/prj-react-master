import {Form } from "react-bootstrap";
import { useRecipe } from '../recipes/RecipeContext'

function SortBy(props) {

    const {selectedSortBy, setSelectedSortBy} = useRecipe();

    const options = [
        {
            value: "popularity",
            title: "Най-популярни",
        },
        {
            value: "time",
            title: "Най-бързи за направа",
        },
        {
            value: "healthiness",
            title: "Най-здравословни",
        },
        {
            value: "calories",
            title: "Най-калорични",
        },
    ]

    function getOptions() {
        return options.map(option => {
            return <option 
            value={option.value}
            key = {option.value}>{option.title}</option>
        })
    }

    return (
        <Form.Group className="mb-3" controlId="filterForm.ControlSortBy">
            <Form.Label>Сортирайте по</Form.Label>
            <Form.Select
                value = {selectedSortBy}
                onChange = {e => setSelectedSortBy(e.target.value)}>
                {getOptions()}
            </Form.Select>
      </Form.Group>

    )
}
export default SortBy;