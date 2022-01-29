import {Navbar, Container, Nav, Form, FormControl, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

function NavBar () {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Edgy Veggy</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
          <LinkContainer to ="/">
          <Nav.Link href="/">Начало</Nav.Link>
          </LinkContainer>
          <LinkContainer to ="/recipes">
          <Nav.Link href="/recipes">Рецепти</Nav.Link>
          </LinkContainer>
          <LinkContainer to ="/favorites">
          <Nav.Link href="/favorites">Любими рецепти</Nav.Link>
          </LinkContainer>

      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Търсене</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar;