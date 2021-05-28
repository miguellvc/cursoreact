import React from "react";
import "./trabajos.css";

import { List } from "../../components/list/List";

export class Trabajos extends React.Component {
  render() {
    return (
      <>
        <h1 className="title mt-4">Puestos Laborales</h1>
        

        {
          
          <div>     
            <div>
              <List />
            </div>
            <a
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="btn-flotante">
                    +
            </a>
          </div>

        }
        
      
      </>
    );
  }
}
