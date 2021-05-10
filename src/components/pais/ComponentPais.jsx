import React from "react";

import { FormPais } from "../form/FormPais";

import { StorageData } from "../../controllers/storageData";

export class ComponentPais extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      paises: [] 
    };
  }

  componentDidMount(){
    const paisesStorage = StorageData.getData('paises');
    if(paisesStorage != null){
        this.setState({paises: paisesStorage});
        // let codTem = this.state.paises.length;
        let codPais = paisesStorage[paisesStorage.length - 1]; 
        console.log('codigo del pais', codPais);
    }
  }
  newPais = (pais) => {
    this.setState({paises : [...this.state.paises, pais] });
  };
  deletePais = (codPais) =>{
    if(this.state.paises.length === 1){
      alert('no puedo eliminar todas los paises');
      return;
    }

    const temPais = this.state.paises.filter( pais => pais.codPais !== codPais);
    this.setState({paises: temPais});
    this.addStorage(temPais);
  }

  addStorage = (paises) => {
    StorageData.addDataStorage('paises', paises);
  }
  render() {
    return (
      <>
        <div className="col-sm-6">
          <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.paises.map(pais =>{
                    return <tr key={pais.codPais}>
                      <td>{pais.codPais}</td>
                      <td>{pais.nombrePais}</td>
                      <td><button onClick={() => this.deletePais(pais.codPais)} className="btn btn-danger">X</button></td>
                    </tr>
                  } )
                }
                </tbody>
          </table>

          <div className="mb-3">
            <div className="mb-3 text-end">
              <button onClick={() => this.addStorage(this.state.paises)} className="btn btn-success">
                Guardar 
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 card">
          <h5>Añadir País</h5>
          <FormPais newPais = {this.newPais}/>
        </div>
      </>
    );
  }
}
