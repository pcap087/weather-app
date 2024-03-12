import { React } from 'react'

export const fetchData = async (url) => {
    try {
        const response = await fetch(url) 
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(`Error con la peticion: ${err}`);
        return err;
    }
    
}
