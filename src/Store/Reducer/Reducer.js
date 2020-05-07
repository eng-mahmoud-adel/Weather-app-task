import {GET_DATA} from '../Action/Action';

const initalState = {
    name: "",
    sys: {
        country: "",
    },
    weather: [
        {
            main: "",
            description: "",
    }
    ],
    main: {
        temp: "",
        temp_min: "",
        temp_max: "",
    }
}

const reducer = (state= initalState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                name: action.payload.name,
                sys: {
                    country: action.payload.sys.country,
                },
                weather: [
                    {
                        main: action.payload.weather.map(item => item.main),
                        description: action.payload.weather.map(item => item.description),
                }
                ],
                main: {
                    temp: action.payload.main.temp,
                    temp_min: action.payload.main.temp_min,
                    temp_max: action.payload.main.temp_max,
                }
            }
    }

    return state;
}

export default reducer;