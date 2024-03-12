import React from 'react'
import { UseFunction } from '../helpers/UseFunction';
import { Spinner } from '../components/Spinner';

export const CardWeather = ({clima, loadingData, DIF_KELVIN, KM_H, showData}) => {
    
    if (loadingData) {
        return <Spinner />;
    }

    if (showData) {
        var {weekday, day, month, year, lastTimeUpdate, hoursSunrise, hoursSunset, resultImg} = UseFunction(clima);
    }

    return (
        <>
            {  showData === true ? (
                <div className="container">
                    <div className="row">
                        <div className='col-md-5 mb-2 offset-md-1 animated fadeIn'>
                            <div className="mx-auto shadow-cs rounded-cs p-3">
                                <div className="card-body">
                                    <div className="d-flex p-0">
                                        <img src = { resultImg }></img>
                                        <div className="text-start ms-3">
                                            <h4 className="card-title text-body-secondary ">
                                                { clima.name }, { clima.sys.country }
                                            </h4>
                                            <h5 className="card-subtitle mb-1 text-body-secondary">
                                                { weekday }, { month } { day }, { year }
                                            </h5>   
                                            <h2 className="card-subtitle text-body-secondary mt-1"> 
                                                <strong> { parseInt(clima?.main?.temp - DIF_KELVIN) }°C </strong> 
                                            </h2>
                                            <h6 className="text-body-secondary mb-1">
                                                { clima.weather[0].main } - { clima.weather[0].description } 
                                            </h6>
                                            <p className="text-body-secondary">
                                                <strong>Last update: </strong> { lastTimeUpdate } { lastTimeUpdate.substring(0,1) >= 12 ? 'am' : 'pm' }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 animated fadeIn">
                            <div className="mx-auto shadow-cs rounded-cs p-3">
                                <div className="card-body">
                                    <div className="d-flex p-2">
                                        <div className="mx-auto ">
                                            <h6 className="card-subtitle text-body-secondary"> 
                                                <strong>{ parseInt(clima?.main?.temp_max - DIF_KELVIN) }°C </strong> 
                                                <p>High</p>
                                            </h6>
                                            <h6 className="card-subtitle text-body-secondary mte-4"> 
                                                <strong>{ parseInt(clima?.main?.temp_min - DIF_KELVIN) }°C </strong>
                                                <p>Low</p>
                                            </h6>
                                        </div>
                                        <div className="mx-auto animated ">
                                            <h6 className="card-subtitle text-body-secondary"> 
                                                <strong>{ parseInt(clima?.wind?.speed * KM_H) } km/h</strong>
                                                <p>Wind Speed</p>
                                            </h6>
                                            <h6 className="card-subtitle text-body-secondary mte-4"> 
                                                <strong>{ clima?.main?.humidity }%</strong>
                                                <p>Humidity</p>
                                            </h6>
                                        </div>
                                        <div className="mx-auto">
                                            <h6 className="card-subtitle text-body-secondary"> 
                                                <strong>{ hoursSunrise } am</strong> 
                                                <p>Sunrise</p>
                                            </h6>
                                            <h6 className="card-subtitle text-body-secondary mte-4"> 
                                                <strong>{ hoursSunset } pm</strong>
                                                <p>Sunset</p>
                                            </h6> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                ) :  
                <div>
                    <h6>No data</h6>
                </div>
            }
        </>
    )
}


{/* <h3> { clima.name }, { clima.sys.country }</h3>
<p> { getDataDate(clima)[0].weekday }, { getDataDate(clima)[0].day } { getDataDate(clima)[0].month } </p> 
<p> { getDataDate(clima)[0].year } </p> 
<p> { parseInt(clima?.main?.temp - DIF_KELVIN) }°C </p>
<p> { clima.weather[0].main } </p>
<p> { clima.weather[0].description } </p>
<img src = { getImages(clima) } ></img> */}


 {/* <div className='col-md-5 mb-1'>
    <div className="card mx-auto">
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
</div> */}


//if (!loadingData) return //sino existe la data del clima entonces sale de la funcion

//const {weekday, day, month, year, lastTimeUpdate, hoursSunrise, hoursSunset, resultImg} = UseFunction(clima);