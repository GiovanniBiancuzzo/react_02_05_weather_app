// L’utente dovrà essere in grado di selezionare la città e ricevere le informazioni sul tempo (pioverà?, temperatura?, prossimi giorni?)

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherComponent from "./WeatherComponent";

const HomeComponent = () => {
    const city = useSelector((state) => state.search);
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
                weather: data.list[8].weather[0],
                main: data.list[8].main,
                wind: data.list[8].wind,
                clouds: data.list[8].clouds,
                // rain: weatherInfo.rain,
                // snow: weatherInfo.snow,
            },
        });
        weatherDispatch({
            type: "ADD_CITY_WEATHER_TWODAY",
            payload: {
                name: data.city.name,
                weather: data.list[16].weather[0],
                main: data.list[16].main,
                wind: data.list[16].wind,
                clouds: data.list[16].clouds,
                // rain: weatherInfo.rain,
                // snow: weatherInfo.snow,
            },
        });
        weatherDispatch({
            type: "ADD_CITY_WEATHER_THREEDAY",
            payload: {
                name: data.city.name,
                weather: data.list[24].weather[0],
                main: data.list[24].main,
                wind: data.list[24].wind,
                clouds: data.list[24].clouds,
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
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=b4bf487457c59aad1bf353eadea50057&cnt=25&units=metric&lang=it` //25 risultati in unità metriche in italiano
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weatherInfo.search]);

    return weatherInfo.search ? (
        <WeatherComponent weatherInfo={weatherInfo} />
    ) : (
        <h3 className="text-center mt-3">
            Cerca una città in alto o concedi i permessi di localizzazione
        </h3>
    );
};

export default HomeComponent;
