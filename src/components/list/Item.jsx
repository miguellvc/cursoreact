import React from 'react'; 

import './list.css';
export class Item extends React.Component {
 
    constructor(props){
        super(props);
    }
    
    render(){
        const {puestos, quitarPuesto } = this.props;

        return(
                puestos.map(puesto =>{
                return <div key={puesto.id} className="col-sm-6">
                              <div className="mt-2 card">
                                  <div className="card-body">
                                      <h5 className="card-title">{puesto.name}</h5>
                                      <p className="card-text">
                                        <span className="border-bottom border-4 text-uppercase"> Descripción: </span> {puesto.description},
                                        <span className="border-bottom border-4 text-uppercase"> Organización: </span> {puesto.organization}, 
                                      </p>
                                      <div className="text-end">
                                        <button onClick={() => quitarPuesto(puesto.id)} className="btn btn-danger">Quitar</button>
                                      </div>
                                  </div>
                              </div>
                        </div>
                })      
            )
    }
  
}

/*

<li className="mt-3" key={puesto.id}>
                            { `Puesto: ${puesto.puesto}, Empresa: ${puesto.empresa}, Ciudad: ${puesto.ciudad}, País: ${puesto.pais}, Tecnología: ${puesto.tecnologia}.` }
                            <button onClick={() => deletePuesto(puesto.id)} className="btn-danger">X</button>
                        </li>

<div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</div>





*/