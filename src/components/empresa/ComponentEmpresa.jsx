import React from 'react'; 

import { FormEmpresa } from '../form/FormEmpresa';

import { getEmpresas, postEmpresa, deleteEmpresa } from '../../controllers/empresa';

export class ComponentEmpresa extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            empresas: [],
            cargadoData : true
          };
    }

    componentDidMount(){
        this.mostrarEmpresas();
      }

    mostrarEmpresas = () =>{
      getEmpresas()
      .then(empresas =>{
          this.setState({cargadoData: false});
          this.setState({empresas: empresas});
      })
    }
    
    newEmpresa = (empresa) => {
        postEmpresa(empresa)
          .then(() =>{
            this.mostrarEmpresas();
          })
      }

    eliminarEmpresa = (id) =>{
        deleteEmpresa(id)
          .then(resp =>{
            console.log(resp);
          })
      }
    render(){
        return(
            <>
            {
                 <div className="row">
                      <div className="col-sm-6">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Localidad</th>
                        <th scope="col">Acción</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                             this.state.cargadoData? <h1>cargando data</h1> : 
                      this.state.empresas.map(empresa =>{
                          return <tr key={empresa.id}>
                          <td>{empresa.id}</td>
                          <td>{empresa.name}</td>
                          <td>{empresa.namePlace}</td>
                          <td><button onClick={() => this.eliminarEmpresa(empresa.id)} className="btn btn-danger">X</button></td>
                          </tr>   
                    })
                    } 
                    
                    </tbody>
                </table>

            </div>
            <div className="col-sm-6 card">
              <h5>Añadir Empresa</h5> 
              <FormEmpresa newEmpresa = { this.newEmpresa }/>
            </div>
                 </div>
                 
                
            }
            </>
        )
    }
}