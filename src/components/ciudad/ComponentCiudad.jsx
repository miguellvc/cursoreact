import React from "react";

import { FormCiudad } from "../form/FormCiudad";

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
        })
  }

  newCiudad = (ciudad) => {
    postCiudad(ciudad)
      .then(() =>{
        this.mostrarCiudades();
      })
  };

  eliminarCiudad = (codCiudad) =>{ 
    deleteCiudad(codCiudad)
      .then(() => {
          this.mostrarCiudades();
      })
  }
 
  render() {
    return (
      <>
        {
         
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
