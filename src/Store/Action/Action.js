import axios from 'axios';

const API_Key= '1f4adc4b686be702b3984e4cc5ae7fab';

export const GET_DATA = "GET_DATA";

export const getData = (city) => async (dispatch) => {
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`)
    .then((response) => {
        console.log(response.data);
        dispatch({
            type: GET_DATA,
            payload: response.data,
        })
    })
    .catch((error) => console.log(error))
} 
