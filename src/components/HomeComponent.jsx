// L’utente dovrà essere in grado di selezionare la città e ricevere le informazioni sul tempo (pioverà?, temperatura?, prossimi giorni?)

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherComponent from "./WeatherComponent";

const HomeComponent = () => {
    const weatherInfo = useSelector((state) => state);

    const weatherDispatch = useDispatch();

    const dispatchComponent = (data) => {
        //raccolgo i vari dispatch per i vari giorni in un unico dispatch
        weatherDispatch({
            type: "ADD_CITY_WEATHER_TODAY",
            payload: {
                name: data.city.name,
                weather: data.list[0].weather[0],
                main: data.list[0].main,
                wind: data.list[0].wind,
                clouds: data.list[0].clouds,
                // rain: weatherInfo.rain,
                // snow: weatherInfo.snow,
            },
        });
        weatherDispatch({
            type: "ADD_CITY_WEATHER_ONEDAY",
            payload: {
                name: data.city.name,
                weather: data.list[1].weather[0],
                main: data.list[1].main,
                wind: data.list[1].wind,
                clouds: data.list[1].clouds,
                // rain: weatherInfo.rain,
                // snow: weatherInfo.snow,
            },
        });
        weatherDispatch({
            type: "ADD_CITY_WEATHER_TWODAY",
            payload: {
                name: data.city.name,
                weather: data.list[2].weather[0],
                main: data.list[2].main,
                wind: data.list[2].wind,
                clouds: data.list[2].clouds,
                // rain: weatherInfo.rain,
                // snow: weatherInfo.snow,
            },
        });
        weatherDispatch({
            type: "ADD_CITY_WEATHER_THREEDAY",
            payload: {
                name: data.city.name,
                weather: data.list[3].weather[0],
                main: data.list[3].main,
                wind: data.list[3].wind,
                clouds: data.list[3].clouds,
                // rain: weatherInfo.rain,
                // snow: weatherInfo.snow,
            },
        });
    };

    // navigator.geolocation.getCurrentname(
    //     (pos) => {
    //         setCity({
    //             name: {
    //                 lat: pos.coords.latitude,
    //                 lng: pos.coords.longitude,
    //             },
    //         });
    //         console.log(city);
    //     },
    //     (error) => console.log(error)
    // );

    const weatherFetch = () => {
        console.log("fetch meteo");
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=messina&APPID=b4bf487457c59aad1bf353eadea50057&units=metric`
        )
            .then((res) => res.json())
            .then((data) => {
                if (weatherInfo.today.name.includes(data.city.name))
                    return; //controllo se la città non è gia inclusa tra quelle nello store
                else dispatchComponent(data);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        console.log("did mount");
        weatherFetch();
    }, []);

    return weatherInfo ? (
        <WeatherComponent weatherInfo={weatherInfo} />
    ) : (
        <>
            <h3 className="text-center mt-3">
                Cerca una città in alto o concedi i permessi di localizzazione
            </h3>
        </>
    );
};

export default HomeComponent;
