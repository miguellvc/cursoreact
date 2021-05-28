import React from "react";

import { FormPais } from "../form/FormPais";

import { StorageData } from "../../controllers/storageData";

import { getPaises, postPais, deletePais } from "../../controllers/pais" 

export class ComponentPais extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      paises: [],
      error: false
    };
  }

  componentDidMount(){
    this.mostrarPaises();
  }

  mostrarPaises =  () => {
     getPaises()
            .then(paises => {
              this.setState({paises : paises.data})
            })
  }

  newPais =  (pais) => {
     postPais(pais)
      .then(paises =>{
        this.setState({paises : [...this.state.paises, paises.data]})
      })
      .catch(() => {
        this.setState({error: true})
      })
  };
  delPais =  (codPais) =>{
     deletePais(codPais)
        .then(() => {
          this.mostrarPaises();
        })
  }

  addStorage = (paises) => {
    StorageData.addDataStorage('paises', paises);
  }
  render() {
    return (
      <>
        <div className="col-sm-6">
          
          { 
            this.state.error ? <h3>Error en la lectura de datos</h3> : 
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
                this.state.paises.map(pais => {
                  return(
                        <tr key={pais.id}>
                          <td>{pais.id}</td>
                          <td>{pais.name}</td>
                          <td><button onClick={() => this.delPais(pais.id)} className="btn btn-danger">X</button></td>
                        </tr>
                        ) 
                })
              }
              </tbody>
          </table>

          }
        </div>

        <div className="col-sm-6 card">
          <h5>Añadir País</h5>
          <FormPais newPais = {this.newPais}/>
        </div>
      </>
    );
  }
}
