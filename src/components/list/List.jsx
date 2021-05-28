
import React from 'react'; 
import { FormPuestos } from '../form/FormPuestos';
import { StorageData } from "../../controllers/storageData";
import { Item } from './Item';

import { getPuestos, postPuesto, deletePuesto } from '../../controllers/puesto';

export class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            puestos : []
         }
        
    }
    componentDidMount(){
        this.mostrarPuestos();
      }

    mostrarPuestos = () => {
        getPuestos()
        .then(resp =>{
            this.setState({puestos: resp});
        });
    }

    newPuesto = (puesto) => {
        postPuesto(puesto)
        .then( () =>{
            this.mostrarPuestos();
        })
       
      }

    quitarPuesto = (id) =>{
        deletePuesto(id)
                .then( () =>{
                    this.mostrarPuestos();
                });
      }
   
    addStorage = (puestos) => {
        StorageData.addDataStorage('puestos', puestos);
      }
    render(){
        return (
            <>       
                         {
                            this.state.puestos.length === 0 ? 
                                <h4>Añadir puestos laborales</h4>
                            :
                            <div className="row">
                                <Item puestos={this.state.puestos} quitarPuesto= {this.quitarPuesto}/>
                                <div className="mt-4 text-end">
                                </div>
                            </div>
                         }
                          <FormPuestos newPuesto = {this.newPuesto} />
            </>
        );
    }
  
    cleanInput(){
       const input =  document.getElementsByClassName("cleanInput");
       for(let i= 0; i < input.length; i++){
           input[i].value = '';  
       }
    }
}