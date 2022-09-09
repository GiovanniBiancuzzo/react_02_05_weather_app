// L’utente dovrà essere in grado di selezionare la città e ricevere le informazioni sul tempo (pioverà?, temperatura?, prossimi giorni?)

import {
    Accordion,
    Badge,
    Card,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap";
import WeatherCard from "./WeatherCard";

const WeatherComponent = (props) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={"image"} />
            <Card.Body>
                <Card.Title>{props.weatherInfo.today.name}</Card.Title>
                <Badge>{props.weatherInfo.today.main.temp}</Badge>

                <WeatherCard weatherInfo={props.weatherInfo.today} />
            </Card.Body>
            <Accordion>
                <ListGroup className="list-group-flush">
                    <Accordion.Toggle as={ListGroupItem} eventKey="0">
                        Domani
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <ListGroupItem>
                            <WeatherCard
                                weatherInfo={props.weatherInfo.oneDay}
                            />
                        </ListGroupItem>
                    </Accordion.Collapse>

                    <Accordion.Toggle as={ListGroupItem} eventKey="1">
                        Dopodomani
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <ListGroupItem>
                            <WeatherCard
                                weatherInfo={props.weatherInfo.twoDay}
                            />
                        </ListGroupItem>
                    </Accordion.Collapse>

                    <Accordion.Toggle as={ListGroupItem} eventKey="2">
                        Tra 3 giorni
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <ListGroupItem>
                            <WeatherCard
                                weatherInfo={props.weatherInfo.threeDay}
                            />
                        </ListGroupItem>
                    </Accordion.Collapse>
                </ListGroup>
            </Accordion>
            {/* <Card.Body>
                <Button variant="success">Aggiungi ai preferiti</Button>
            </Card.Body> */}
        </Card>
    );
};

export default WeatherComponent;
