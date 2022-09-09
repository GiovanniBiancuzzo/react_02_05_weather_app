const initialState = {
    name: "",
    weather: [],
    main: {},
    wind: {},
    clouds: {},
    rain: {},
    snow: {},
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CITY_WEATHER": return {
            ...state,
            name: [...state.name, action.payload.name],

            weather: [...state.weather, {
                id: action.payload.weather.id,
                main: action.payload.weather.main,
                description: action.payload.weather.description,
                icon: action.payload.weather.icon,
            }],
            main: {
                ...state.main,
                temp: action.payload.main.temp,
                feels_like: action.payload.main.feels_like,
                temp_min: action.payload.main.temp_min,
                temp_max: action.payload.main.temp_max,
                pressure: action.payload.main.pressure,
                humidity: action.payload.main.humidity,
            },
            wind: {
                ...state.main,
                speed: action.payload.wind.speed,
                deg: action.payload.wind.deg,
            },
            clouds: {
                ...state.main,
                all: action.payload.clouds.all,
            },
            // rain: {
            //     ...state.main,
            //     1h: action.payload.rain.1h,
            // },
            // snow: {
            //     ...state.main,
            //     1h: action.payload.snow.1h,
            // },
        };
        default: return state;
    }
};

export default mainReducer;