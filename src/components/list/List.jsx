import React from 'react'; 


import { FormPuestos } from '../form/FormPuestos';
import { StorageData } from "../../controllers/storageData";
import { Item } from './Item';


export class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            puestos : []
         }
        
    }
    componentDidMount(){
        const storagePuestos = StorageData.getData('puestos');
        if(storagePuestos != null){
            this.setState({puestos: storagePuestos});
        }
      }
    newPuesto = (puesto) => {
        let temPuesto = {};
        temPuesto = {
                ...puesto,
                codPuesto: this.key()
            }
        this.setState({ puestos: [ ...this.state.puestos, temPuesto ] });
        console.log("se ejecuta el método", this.state.puestos);
      };

    deletePuesto = (codPuesto) =>{
        const puestos = this.state.puestos.filter(puesto => puesto.codPuesto != codPuesto);
        this.setState({puestos: puestos});
        this.addStorage(puestos);
      };
   
    addStorage = (puestos) => {
        StorageData.addDataStorage('puestos', puestos);
      }
    key() {
            var resultado           = '';
            var characteres       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var characteresLength = characteres.length;
            for ( var i = 0; i < 20; i++ ) {
               resultado += characteres.charAt(Math.floor(Math.random() * characteresLength));
            }
            return resultado;
         }
    render(){
        return (
            <>       
                         {
                            this.state.puestos.length === 0 ? 
                                <h4>Añadir puestos laborales</h4>
                            :
                            <div className="row">
                                <Item puestos={this.state.puestos} deletePuesto= {this.deletePuesto}/>
                                <div className="mt-4 text-end">
                                <button onClick={() => this.addStorage(this.state.puestos)} className="btn btn-success">
                                    Guardar 
                                </button>
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