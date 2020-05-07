import React from 'react';
import {connect} from "react-redux";
import {getData} from '../../Store/Action/Action';

const Form = ({data, getData}) => {

    const handleSubmit = (e) => {
        if (e.target.elements[0].value == "") {
            // to stop refreshing
            e.preventDefault();
            return false;
        } else {
            // to stop refreshing
            e.preventDefault();
            // to target the input field
            getData(e.target.elements[0].value);
            e.target.elements[0].value = "";
        }
    }

    return (
        <div className="form container text-center">
            <div className="wrapper">
                <h1 className="font-weight-bold">Just type the city name</h1>
                <p className="text-muted">you must spelling correctly</p>
            </div>

            <form onSubmit={handleSubmit}>
                <input type="text" name="city" placeholder="write your city name here ..." className="w-50" />
                <button className="btn btn-info w-25">find</button>
            </form>

            <div className="result">
                {data && <p className="mt-5">{data.name}, {data.sys.country}</p>}
                {data && <p className="mt-4 circle mx-auto"></p>}
                {data && <p className="mb-0">{data.weather.map(item => item.main)}</p>}
                {data && <p className="mb-0">{data.main.temp}</p>}
                {data && <p className="mb-0">{data.main.temp_max} &nbsp; {data.main.temp_min}</p>}
                {data && <p className="mb-0">{data.weather.map(item => item.description)}</p>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state
});

const mapDispatchToProps = (dispatch) => ({

    getData: (city) => {
        dispatch(getData(city));
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
