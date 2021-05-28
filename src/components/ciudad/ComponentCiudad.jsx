import React from "react";

import { FormCiudad } from "../form/FormCiudad";

import { StorageData } from "../../controllers/storageData";

import { getCiudades, postCiudad, deleteCiudad } from '../../controllers/ciudad'; 

export class ComponentCiudad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ciudades: [],
    };
  }

  componentDidMount(){
    this.mostrarCiudades();
  }

 
  mostrarCiudades = () =>{
    getCiudades()
        .then(ciudades =>{
          this.setState({ ciudades: ciudades })
          console.log('el state de ciudades', this.state.ciudades);
        })
  }

  newCiudad = (ciudad) => {
    // this.setState({ ciudades: [ ...this.state.ciudades, ciudad ] });
    postCiudad(ciudad)
      .then(resp =>{
        this.mostrarCiudades();
      })
    // console.log(this.state.ciudades);
  };

  eliminarCiudad = (codCiudad) =>{ 
    deleteCiudad(codCiudad)
      .then(resp => {
          this.mostrarCiudades();
      })
  }
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
                    return <tr key={ciudad.id}>
                      <td>{ciudad.id}</td>
                      <td>{ciudad.name}</td>
                      <td>{ciudad.nameCountrie}</td>
                      <td><button onClick={() => this.eliminarCiudad(ciudad.id)} className="btn btn-danger">X</button></td>
                    </tr>
                  } )
                }
                </tbody>
          </table>
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


/*
  let temporal =[];
getCiudades()
  .then((response) => {
      // handle success
      temporal.push(response.data)
      console.log('Ciudades', temporal);
      temporal.map(item =>{
        getPais()
        .then((response) => {
          let ciudTem = {
            codCiudad : item.id,
            nombreCiudad : item.name,
            pais : response.data.name 
          }
          console.log('Paises', ciudTem);
          this.setState({pruebaCiudades : [...this.state.pruebaCiudades, ciudTem]});
          console.log('Ciudades desde el state', this.state.pruebaCiudades);
        })
       
      })
    })


*/
