
import React from 'react'; 

export class Item extends React.Component {
 
    constructor(props){
        super(props);
    }
    
    render(){
        const {puestos, deletePuesto } = this.props;

        return(
                puestos.map(puesto =>{
                return <li className="mt-3" key={puesto.id}>
                            { `Puesto: ${puesto.puesto}, Empresa: ${puesto.empresa}, Ciudad: ${puesto.ciudad}, País: ${puesto.pais}, Tecnología: ${puesto.tecnologia}.` }
                            <button onClick={() => deletePuesto(puesto.id)} className="btn-danger">X</button>
                        </li>
                })      
            )
    }
  
}