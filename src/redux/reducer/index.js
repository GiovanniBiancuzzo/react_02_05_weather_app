const initialState = {
    today: {
        name: "",
        weather: [],
        main: {},
        wind: {},
        clouds: {},
        rain: {},
        snow: {},
    },
    oneDay: {
        name: "",
        weather: [],
        main: {},
        wind: {},
        clouds: {},
        rain: {},
        snow: {},
    },
    twoDay: {
        name: "",
        weather: [],
        main: {},
        wind: {},
        clouds: {},
        rain: {},
        snow: {},
    },
    threeDay: {
        name: "",
        weather: [],
        main: {},
        wind: {},
        clouds: {},
        rain: {},
        snow: {},
    },
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CITY_WEATHER_TODAY": return {
            ...state,
            today: {
                name: [...state.today.name, action.payload.name],

                weather: [...state.today.weather, {
                    id: action.payload.weather.id,
                    main: action.payload.weather.main,
                    description: action.payload.weather.description,
                    icon: action.payload.weather.icon,
                }],
                main: {
                    ...state.today.main,
                    temp: action.payload.main.temp,
                    feels_like: action.payload.main.feels_like,
                    temp_min: action.payload.main.temp_min,
                    temp_max: action.payload.main.temp_max,
                    pressure: action.payload.main.pressure,
                    humidity: action.payload.main.humidity,
                },
                wind: {
                    ...state.today.main,
                    speed: action.payload.wind.speed,
                    deg: action.payload.wind.deg,
                },
                clouds: {
                    ...state.today.main,
                    all: action.payload.clouds.all,
                },
                // rain: {
                //     ...state.today.main,
                //     1h: action.payload.rain.1h,
                // },
                // snow: {
                //     ...state.today.main,
                //     1h: action.payload.snow.1h,
                // },
            }
        };
        case "ADD_CITY_WEATHER_ONEDAY": return {
            ...state,
            oneDay: {
                name: [...state.oneDay.name, action.payload.name],

                weather: [...state.oneDay.weather, {
                    id: action.payload.weather.id,
                    main: action.payload.weather.main,
                    description: action.payload.weather.description,
                    icon: action.payload.weather.icon,
                }],
                main: {
                    ...state.oneDay.main,
                    temp: action.payload.main.temp,
                    feels_like: action.payload.main.feels_like,
                    temp_min: action.payload.main.temp_min,
                    temp_max: action.payload.main.temp_max,
                    pressure: action.payload.main.pressure,
                    humidity: action.payload.main.humidity,
                },
                wind: {
                    ...state.oneDay.main,
                    speed: action.payload.wind.speed,
                    deg: action.payload.wind.deg,
                },
                clouds: {
                    ...state.oneDay.main,
                    all: action.payload.clouds.all,
                },
                // rain: {
                //     ...state.oneDay.main,
                //     1h: action.payload.rain.1h,
                // },
                // snow: {
                //     ...state.oneDay.main,
                //     1h: action.payload.snow.1h,
                // },
            }
        };
        case "ADD_CITY_WEATHER_TWODAY": return {
            ...state,
            twoDay: {
                name: [...state.twoDay.name, action.payload.name],

                weather: [...state.twoDay.weather, {
                    id: action.payload.weather.id,
                    main: action.payload.weather.main,
                    description: action.payload.weather.description,
                    icon: action.payload.weather.icon,
                }],
                main: {
                    ...state.twoDay.main,
                    temp: action.payload.main.temp,
                    feels_like: action.payload.main.feels_like,
                    temp_min: action.payload.main.temp_min,
                    temp_max: action.payload.main.temp_max,
                    pressure: action.payload.main.pressure,
                    humidity: action.payload.main.humidity,
                },
                wind: {
                    ...state.twoDay.main,
                    speed: action.payload.wind.speed,
                    deg: action.payload.wind.deg,
                },
                clouds: {
                    ...state.twoDay.main,
                    all: action.payload.clouds.all,
                },
                // rain: {
                //     ...state.twoDay.main,
                //     1h: action.payload.rain.1h,
                // },
                // snow: {
                //     ...state.twoDay.main,
                //     1h: action.payload.snow.1h,
                // },
            }
        };
        case "ADD_CITY_WEATHER_THREEDAY": return {
            ...state,
            threeDay: {
                name: [...state.threeDay.name, action.payload.name],

                weather: [...state.threeDay.weather, {
                    id: action.payload.weather.id,
                    main: action.payload.weather.main,
                    description: action.payload.weather.description,
                    icon: action.payload.weather.icon,
                }],
                main: {
                    ...state.threeDay.main,
                    temp: action.payload.main.temp,
                    feels_like: action.payload.main.feels_like,
                    temp_min: action.payload.main.temp_min,
                    temp_max: action.payload.main.temp_max,
                    pressure: action.payload.main.pressure,
                    humidity: action.payload.main.humidity,
                },
                wind: {
                    ...state.threeDay.main,
                    speed: action.payload.wind.speed,
                    deg: action.payload.wind.deg,
                },
                clouds: {
                    ...state.threeDay.main,
                    all: action.payload.clouds.all,
                },
                // rain: {
                //     ...state.threeDay.main,
                //     1h: action.payload.rain.1h,
                // },
                // snow: {
                //     ...state.threeDay.main,
                //     1h: action.payload.snow.1h,
                // },
            }
        };
        default: return state;
    };
};

export default mainReducer;