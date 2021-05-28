
import axios from 'axios';

const url = 'https://api-fake-pilar-tecno.herokuapp.com/countries'

const getPais =  (id) => {
    return  axios.get(`${url}/${id}`);
}

const getPaises = () => {
    return axios.get(`${url}`); 
}

const postPais = (pais) => {
    return axios.post(`${url}`, pais);
}

const deletePais = (idPais) =>{
    return axios.delete(`${url}/${idPais}`);
}


export {
    getPaises, 
    getPais, 
    postPais,
    deletePais
}