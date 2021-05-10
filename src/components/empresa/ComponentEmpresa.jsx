import React from 'react'; 

import { FormEmpresa } from '../form/FormEmpresa';

import { StorageData } from "../../controllers/storageData";

export class ComponentEmpresa extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            empresas: [] 
          };
    }

    componentDidMount(){
        const empresasStorage = StorageData.getData('empresas');
        if(empresasStorage != null){
            this.setState({empresas: empresasStorage});
        }
      }
    newEmpresa = (empresa) => {
        this.setState({empresas : [...this.state.empresas, empresa] });
        console.log(this.state.empresas);
      }
    deleteEmpresa = (codEmpresa) =>{
        if(this.state.empresas.length === 1){
            alert('no puedo eliminar todas las empresas');
            return;
          }
        const temEmpresa = this.state.empresas.filter( empresa => empresa.codEmpresa !== codEmpresa);
        this.setState({empresas: temEmpresa});
        this.addStorage(temEmpresa);
      }
    addStorage = (empresa) => {
        StorageData.addDataStorage('empresas', empresa);
      }
    render(){
        return(
            <>

            {
                 StorageData.getData('paises') != null 
                 && StorageData.getData('ciudades') != null ? 
                 <div className="row">
                      <div className="col-sm-6">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Localidad</th>
                        <th scope="col">Acción</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                    this.state.empresas.map(empresa =>{
                        return <tr key={empresa.codEmpresa}>
                        <td>{empresa.codEmpresa}</td>
                        <td>{empresa.nombreEmpresa}</td>
                        <td>{empresa.pais}</td>
                        <td>{empresa.ciudad}</td>
                        <td><button onClick={() => this.deleteEmpresa(empresa.codEmpresa)} className="btn btn-danger">X</button></td>
                        </tr>
                    } )
                    }
                    </tbody>
                </table>

                <div className="mb-3">
                    <div className="mb-3 text-end">
                    <button onClick={() => this.addStorage(this.state.empresas)} className="btn btn-success">
                        Guardar 
                    </button>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 card">
              <h5>Añadir Empresa</h5> 
              <FormEmpresa newEmpresa = { this.newEmpresa }/>
            </div>
                 </div>
                 : 
                 <h3>Debe añadir al menos un país y una ciudad para poder ingresar empresas</h3>
                
            }
            </>
        )
    }
}