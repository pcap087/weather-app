import {React, useState, useRef } from 'react'
import {API_KEY, API_BASE_URL, DIF_KELVIN, KM_H} from './api/config';
import { fetchData } from './data/fetch-weather';
import { CardWeather } from './components/CardWeather';

export const WeatherApp = () => {
    const [ clima, setClima ]  = useState(null);        //para cargar la data
    const [ loading, setLoading ] = useState(false);    //para el spinner
    const [ show, setShow ] = useState(false);          //para mostrar
    const inputCity = useRef(null);

    const searchButton = async (e) => {
        e.preventDefault();
        const city = inputCity.current.value;
        setLoading(true);

        if (city.length > 0) {
            const dataClima = await fetchData(`${API_BASE_URL}?q=${city}&appid=${API_KEY}`);
            if (dataClima.cod === 200) {
                setShow(true)
                setClima(dataClima);
            } else {
                console.log('error')
                setShow(false)
                setClima(null);
            }
            setLoading(false);
        }
    }   

    return (
        <>
            <div className="container-w1">
                <form>
                    <input 
                        type="text" 
                        ref={inputCity}
                    />
                    <button onClick={(e) => searchButton(e)}> Search </button>
                </form>
            </div>
            <CardWeather 
                clima = { clima } 
                showData = { show }
                loadingData = { loading }
                DIF_KELVIN = { DIF_KELVIN } 
                KM_H = { KM_H }
            />
            {/* <pre>{JSON.stringify(clima, null, 2)}</pre>  */}
        </>
    )
}

//const [ city, setCity ]    = useState(''); #

 // const changeCity = (e) => {
//     setCity(e.target.value)
// }

// value={city} 
// onChange={changeCity} 