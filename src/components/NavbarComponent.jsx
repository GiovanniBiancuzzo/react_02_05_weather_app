import { useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
    const location = useLocation();
    const cityDispatch = useDispatch();
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("Invio città con dispatch");
        cityDispatch({
            type: "ADD_CITY",
            payload: city,
        });
        setCity("");
        // navigate("/");
    };

    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand>Weather app</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link
                        to="/"
                        className={`nav-link ${
                            location.pathname === "/" ? "active" : "" //da riempire con delle route
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/history"
                        className={`nav-link ${
                            location.pathname === "/history" ? "active" : "" //da riempire con delle route
                        }`}
                    >
                        Città cercate
                    </Link>
                </Nav>
                <Form
                    inline
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <FormControl
                        type="text"
                        placeholder="Inserisci una città"
                        className="mr-sm-2"
                        value={city}
                        onChange={(e) => {
                            setCity(e.target.value);
                        }}
                    />
                    <Button variant="outline-success" type="submit">
                        Cerca
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
