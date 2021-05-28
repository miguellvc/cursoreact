
import axios from 'axios';

const url = 'https://api-fake-pilar-tecno.herokuapp.com/jobs?_expand=organization'

const url_2 = 'https://api-fake-pilar-tecno.herokuapp.com/jobs';

const getPuestos = () =>{
    return new Promise((res, req) =>{
        let data = []; 
        axios.get(`${url}`)
                .then(resData => {
                    resData.data.map(item =>{ 
                        let ciudad = {
                            id: item.id, 
                            name : item.position,
                            description : item.description,
                            organization : item.organization.name
                        }
                        data.push(ciudad);
                    })
                 
                    res(data);         
                })
        })
}

const postPuesto = (puesto) =>{
        return axios.post(`${url_2}`,puesto)
}

const deletePuesto = (id) => {
    return axios.delete(`${url_2}/${id}`);
}

export {
    getPuestos, 
    postPuesto,
    deletePuesto
}