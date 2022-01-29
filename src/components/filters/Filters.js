import {Card, Form, Button} from "react-bootstrap";
import SortBy from "./SortBy";
import SortType from "./SortType";
import Cuisine from "./Cuisine";
import Diet from "./Diet";
import {useRecipe} from "../recipes/RecipeContext"
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";

const cuisines = [
    {
        value: "american",
        title: "Американска",
        id: "america",
    },
    {
        value: "european",
        title: "Европейска",
        id: "europe",
    },
    {
        value: "chinese",
        title: "Китайска",
        id: "china",
    },
    {
        value: "indian",
        title: "Индийска",
        id: "india",
    },
    {
        value: "mexican",
        title: "Мексиканска",
        id: "mexico",
    },
    {
        value: "korean",
        title: "Корейска",
        id: "korea",
    },
    {
        value: "greek",
        title: "Гръцка",
        id: "greece",
    },
]


const diets = [
        {
            value: "vegetarian",
            title: "Вегетарианска",
            id: "veggy",
        },
        {
            value: "vegan",
            title: "Веган",
            id: "vegandiet",
        },
        {
            value: "glutenfree",
            title: "Безглутенова",
            id: "nogluten",
        },
        {
            value: "lowcal",
            title: "Нискокалорична",
            id: "lowcalorie",
        },
        {
            value: "ketogenic",
            title: "Кетогенична",
            id: "keto",
        },
    ]


function Filters(props) {

    const dispatch = useDispatch();

    const{selectedSortBy, 
        selectedSortType, 
        checkedCuisine,
        checkedDiet,
    } = useRecipe();

    useEffect(() => {
        fetchRecipes();
    }, []);


    function filtersOnSubmit(e) {
        e.preventDefault();
        fetchRecipes();
    }

    function fetchRecipes() {

        dispatch(getRecipes('recipes/complexSearch', {
            "sort": selectedSortBy,
            "type": selectedSortType,
            "cuisine": getCheckedOptions(),
            "diet": getCheckedDiets(), 
        }))
    }


    function getCheckedOptions() {
        const checkedOptions = checkedCuisine.reduce((acc, curr, index) => {
            if(curr) {
                return [...acc, cuisines[index].value]
            }
            return acc
        }, [])
        return checkedOptions.toString();
    }

    function getCheckedDiets() {
        const checkedOptionsDiet = checkedDiet.reduce((acc,curr,index) => {
            if(curr) {
                return [...acc, diets[index].value]
            }
            return acc
        }, [])
        return checkedOptionsDiet.toString();
    }

    return (
     <Card className="mt-2 mt-md-0">
      <Card.Body>
        <Card.Title className = "mb-3">Филтри</Card.Title>
            <Form onSubmit = {filtersOnSubmit}>
                <SortBy/>
                <SortType/>
                <Cuisine cuisines = {cuisines}/>
                <Diet diets = {diets}/>
                <Button 
                variant="primary" type="submit">
                    Филтрирай
                </Button>
            </Form> 
         </Card.Body>
    </Card>
    )
}
export default Filters;