import { useEffect, useState } from "react";
import { useSelector, useStore } from "react-redux";
import WeatherComponent from "./WeatherComponent";

const WeatherHistoryComponent = () => {
    const weatherInfo = useSelector((state) => state);
    const [image, setImage] = useState("");

    const history = (data) => {
        for (const day in data) {
            <WeatherComponent image={image} weatherInfo={day} />;
        }
    };
    // const history = (data) => {
    //     for (const day in data) {
    //         const index = weatherInfo(day);
    //         <WeatherComponent key={index} image={image} weatherInfo={day} />;
    //     }
    // };

    useEffect(() => {
        console.log(weatherInfo);
        // imageFetch();
    }, []);

    return weatherInfo ? (
        <>{history(weatherInfo)}</>
    ) : (
        // for (const (day,index) in weatherInfo)
        // {
        //     <WeatherComponent
        //         key={index}
        //         image={image}
        //         weatherInfo={day}
        //     />}

        <h3 className="text-center mt-3">
            Cerca una città in alto o concedi i permessi di localizzazione
        </h3>
    );
};

export default WeatherHistoryComponent;
