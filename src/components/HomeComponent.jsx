// L’utente dovrà essere in grado di selezionare la città e ricevere le informazioni sul tempo (pioverà?, temperatura?, prossimi giorni?)

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherComponent from "./WeatherComponent";

const HomeComponent = () => {
    // const [city, setCity] = useState({
    //     name: {
    //         lat: "",
    //         lng: "",
    //     },
    // });

    const [weatherInfo, setWeatherInfo] = useState({
        name: "messina",
        weather: [],
        main: {},
        wind: {},
        clouds: {},
        rain: {},
        snow: {},
    });

    const [image, setImage] = useState("");

    const weatherDispatch = useDispatch();

    // const weatherInfo = useSelector((state) => state);

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
            `https://api.openweathermap.org/data/2.5/weather?q=messina&APPID=b4bf487457c59aad1bf353eadea50057&units=metric`
        )
            .then((res) => res.json())
            .then((data) => {
                setWeatherInfo({
                    name: "messina",
                    weather: data.weather,
                    main: data.main,
                    wind: data.wind,
                    clouds: data.clouds,
                    rain: data.rain,
                    snow: data.snow,
                });
                console.log(weatherInfo);
                console.log(data);
                weatherDispatch({
                    type: "ADD_CITY_WEATHER",
                    payload: {
                        name: "messina",
                        weather: data.weather,
                        main: data.main,
                        wind: data.wind,
                        clouds: data.clouds,
                        // rain: weatherInfo.rain,
                        // snow: weatherInfo.snow,
                    },
                });
            })
            // .then(() => console.log(weatherInfo))
            .catch((error) => console.log(error));
    };

    // const imageFetch = () => {
    //     console.log("fetch immagine");
    //     fetch(`https://imsea.herokuapp.com/api/1?q=messina`, {
    //         method: "GET",
    //         mode: "no-cors",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Origin": " *",
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data.results);
    //             setImage(data.results[0]);
    //         })
    //         .then(() => console.log(image))
    //         .catch((error) => console.log(error));
    // };

    useEffect(() => {
        console.log("did mount");
        weatherFetch();
        // imageFetch();
    }, []);

    return weatherInfo ? (
        <WeatherComponent image={image} weatherInfo={weatherInfo} />
    ) : (
        <>
            <h3 className="text-center mt-3">
                Cerca una città in alto o concedi i permessi di localizzazione
            </h3>
        </>
    );
};

export default HomeComponent;
