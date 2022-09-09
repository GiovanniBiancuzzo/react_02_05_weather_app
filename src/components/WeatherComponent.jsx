// L’utente dovrà essere in grado di selezionare la città e ricevere le informazioni sul tempo (pioverà?, temperatura?, prossimi giorni?)

import {
    Accordion,
    Badge,
    Button,
    Card,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap";
import WeatherCard from "./WeatherCard";

const WeatherComponent = (props) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <div>
                    <Card.Title>{props.weatherInfo.name}</Card.Title>
                    <Badge>{props.weatherInfo.main.temp}</Badge>
                </div>
                <WeatherCard weatherInfo={props.weatherInfo} />
            </Card.Body>
            <Accordion>
                <ListGroup className="list-group-flush">
                    <Accordion.Toggle as={ListGroupItem} eventKey="1">
                        Domani
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <ListGroupItem>
                            {/* <WeatherCard info1={props.weatherInfo} /> */}
                        </ListGroupItem>
                    </Accordion.Collapse>

                    <Accordion.Toggle as={ListGroupItem} eventKey="1">
                        Dopodomani
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <ListGroupItem>
                            {/* <WeatherCard info2={props.weatherInfo} /> */}
                        </ListGroupItem>
                    </Accordion.Collapse>

                    <Accordion.Toggle as={ListGroupItem} eventKey="1">
                        Tra 3 giorni
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <ListGroupItem>
                            {/* <WeatherCard info3={props.weatherInfo} /> */}
                        </ListGroupItem>
                    </Accordion.Collapse>

                    {/* <ListGroupItem>dopodomani</ListGroupItem>
                    <ListGroupItem>3 giorni</ListGroupItem> */}
                </ListGroup>
            </Accordion>
            <Card.Body>
                <Button>Aggiungi ai preferiti</Button>
            </Card.Body>
        </Card>
    );
};

export default WeatherComponent;
