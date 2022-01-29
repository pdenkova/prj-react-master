import {Container, Row} from 'react-bootstrap';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FavoriteRecipes from "./pages/FavoriteRecipes";

const routes = [
  {
    path: '/',
    component: <Home/>,
    exact: true,
  },
  {
    path: 'recipes',
    component: <Recipes/>,
  },
  {
    path: 'favorites',
    component: <FavoriteRecipes/>,
  },
]

function App() {

 const getRoutes = () => {
    return routes.map((route,index) => {
      return <Route 
      key = {index}
      exact = {route.exact}
      path={route.path}
      element={route.component}
      >
      </Route>
    })
  }

  return (
    <Router>
      <NavBar/>
      <Container>
        <Row className = "mt-5">
          <Routes>
            {getRoutes()}
        </Routes>
        </Row>
      </Container>

    </Router>
    
  );
}

export default App;
