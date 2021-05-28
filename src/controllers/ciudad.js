
import axios from 'axios';

const url = 'https://api-fake-pilar-tecno.herokuapp.com/places?_expand=countrie';

const urlPlace = 'https://api-fake-pilar-tecno.herokuapp.com/places';

const getCiudadesPrueba = () =>{
    return axios.get(`${urlPlace}`)
}


const getCiudades = () =>{
    
   return new Promise((res, req) =>{
        let data = []; 
        axios.get(`${url}`)
                .then(resData => {
                    resData.data.map(item =>{ 
                        let ciudad = {
                            id: item.id, 
                            name : item.name,
                            countrieId : item.countrieId,
                            nameCountrie : item.countrie.name
                        }
                        return data.push(ciudad);
                    })
                 
                    res(data);         
                })
        })
    }

const postCiudad = (ciudad) =>{
    return axios.post(`https://api-fake-pilar-tecno.herokuapp.com/places/`, ciudad)
 
}

const deleteCiudad = (id) =>{
    return axios.delete(`${urlPlace}/${id}`);
}

export  {
     getCiudades,
     postCiudad, 
     getCiudadesPrueba,
     deleteCiudad
}

