import React from 'react'; 
import {Item} from '../item/Item'

export class List extends React.Component {
   
    constructor(props){
        super(props);
        this.createState();
    }
    render(){
        return (
            <>
                <h1>Puestos de trabajo</h1>
                <ul>
                    <Item puestos={this.state.puestos} deletePuesto= {this.deletePuesto}/>
                </ul>
                <div className="row">
                    <h2>Añadir Puesto</h2>
                    <label>Puesto</label>
                    <input type="text" name="puesto" className="cleanInput form-control" onChange={(e) => this.inputChange(e)}/>
                    <label>País</label> 
                    <input type="text" name="pais" className="cleanInput form-control" onChange={(e) => this.inputChange(e)}/>
                    <label>Tecnología</label> 
                    <input type="text" name="tecnologia" className="cleanInput form-control" onChange={(e) => this.inputChange(e)}/>
                    <button className="btn btn-primary col-3 mt-3" 
                    onClick={ () => this.newPuesto(this.state.puesto)}
                    >Nuevo</button>
                </div>
            </>
        );
    }

    createState(){
        this.state ={
            puestos : [
                 {
                     id: 1,
                     puesto: 'Adminstrador de red', 
                     pais: 'Argentina',
                     tecnologia: 'Linux, Windows'
                 },
                 {
                     id: 2,
                     puesto: 'Ingeniero DevOps', 
                     pais: 'Argentina',
                     tecnologia: 'Javascript, Node, React'
                 }
             ], 
             puesto : {
                 id: 0,
                 puesto: '', 
                 pais: '',
                 tecnologia: ''
             }
         }
    }

    newPuesto = (puesto) =>{
        const idTem = this.state.puestos.length + 1;
        const temPuesto = {
            ...puesto, 
            id: idTem
        }
        this.setState({puestos: [...this.state.puestos, temPuesto] });
        this.cleanInput();
    }
    deletePuesto = (idPuesto) =>{
        const puestoTem = this.state.puestos.filter(puesto => puesto.id !== idPuesto);
        this.setState({puestos: puestoTem})
    }
    inputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({puesto: {...this.state.puesto,
            [name] : value}});
    }

    cleanInput(){
       const input =  document.getElementsByClassName("cleanInput");
       for(let i= 0; i < input.length; i++){
           input[i].value = '';  
       }
    }
}
