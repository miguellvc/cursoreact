import React from "react";
import "./trabajos.css";
import { StorageData } from "../../controllers/storageData";
import { List } from "../../components/list/List";

export class Trabajos extends React.Component {
  render() {
    return (
      <>
        <h1 className="title mt-4">Puestos Laborales</h1>
        

        {
          StorageData.getData('empresas') === null ?  
          <h3>Debe añadir al menos una empresa para poder ingresar puestos laborales</h3>
          : 
          <div>     
            <div>
              <List />
            </div>
            <a
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    class="btn-flotante">
                    +
            </a>
          </div>

        }
        
      
      </>
    );
  }
}
