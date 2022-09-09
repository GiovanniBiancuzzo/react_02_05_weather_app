// L’utente dovrà essere in grado di selezionare la città e ricevere le informazioni sul tempo (pioverà?, temperatura?, prossimi giorni?)

import Card from "react-bootstrap/card";

const WeatherCard = (props) => {
    return (
        <Card.Text>
            <div>
                {props.weatherInfo.weather.main}°C
                <br></br>
                {props.weatherInfo.weather.description}
            </div>
            <div>
                Percepita: {props.weatherInfo.main.feels_like}°C
                <br></br>
                Minime: {props.weatherInfo.main.temp_min}°C - Massime:
                {props.weatherInfo.main.temp_max}°C
                <br></br>
                Umidità: {props.weatherInfo.main.humidity}
                <br></br>
                Vento: {props.weatherInfo.wind?.speed}{" "}
                {props.weatherInfo.wind?.deg}°<br></br>
                Nuvole: {props.weatherInfo.clouds.all}
                <br></br>
                {/* Pioggia: {props.weatherInfo.rain?.1h}
            <br></br>
             Neve: {props.weatherInfo.snow?.1h} */}
            </div>
        </Card.Text>
    );
};

export default WeatherCard;
