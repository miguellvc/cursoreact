import React from "react";

import { FormCiudad } from "../form/FormCiudad";

import { StorageData } from "../../controllers/storageData";

export class ComponentCiudad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ciudades: [] };
  }

  componentDidMount(){
    const ciudadesStorage = StorageData.getData('ciudades');
    if(ciudadesStorage != null){
        this.setState({ciudades: ciudadesStorage});
    }
  }

  newCiudad = (ciudad) => {
    this.setState({ ciudades: [ ...this.state.ciudades, ciudad ] });
    console.log(this.state.ciudades);
  };

  deleteCiudad = (codCiudad) =>{
    
    if(this.state.ciudades.length === 1){
      alert('no puedo eliminar todas las ciudades');
      return;
    }
    const ciudades = this.state.ciudades.filter(ciudad => ciudad.codCiudad != codCiudad);
    this.setState({ciudades: ciudades});
    this.addStorage(ciudades);
  };
  addStorage = (ciudades) => {
    StorageData.addDataStorage('ciudades', ciudades);
  }
  render() {
    return (
      <>
        
        {
          StorageData.getData('paises') === null ? <h3>Debe añadir al menos un país para poder ingresar ciudades</h3> 
          : 
          <div  className="row">
            <div className="col-sm-6">
          <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.ciudades.map(ciudad =>{
                    return <tr key={ciudad.codCiudad}>
                      <td>{ciudad.codCiudad}</td>
                      <td>{ciudad.nombreCiudad}</td>
                      <td>{ciudad.pais}</td>
                      <td><button onClick={() => this.deleteCiudad(ciudad.codCiudad)} className="btn btn-danger">X</button></td>
                    </tr>
                  } )
                }
                </tbody>
          </table>

          <div className="mb-3">
            <div className="mb-3 text-end">
              <button onClick={() => this.addStorage(this.state.ciudades)} className="btn btn-success">
                Guardar 
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-6 card">
          <h5>Añadir Ciudad</h5>
          <FormCiudad newCiudad={this.newCiudad} />
        </div>
          </div>
        }
        


      </>
    );
  }
}
