
import  axios  from 'axios';

const url = 'https://api-fake-pilar-tecno.herokuapp.com/organizations/?_expand=place'
const url_2 = 'https://api-fake-pilar-tecno.herokuapp.com/organizations';
const getEmpresas = () =>{

    return new Promise((res, req) =>{
        let data = []; 
        axios.get(`${url}`)
                .then(resData => {    
                    resData.data.map(item =>{ 
                            let empresa = {
                                id: item.id, 
                                name : item.name,
                                namePlace : item.place.name,
                            }
                            data.push(empresa);
                        })
                        res(data);         
                })
        })
}

const getEmpresasDos = () =>{
    return axios.get('');
}

const postEmpresa = (empresa) =>{
    return axios.post(`${url_2}`, empresa)
} 

const deleteEmpresa = (id) =>{
    return axios.delete(`${url_2}/${id}`)
}

export  {
    getEmpresas, 
    getEmpresasDos,
    postEmpresa,
    deleteEmpresa
}