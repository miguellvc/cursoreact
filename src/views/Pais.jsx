import React from 'react';
import { ComponentPais } from '../components/pais/ComponentPais' 

export class Pais extends React.Component {

  render() {
    return (
      <>
        <h1 className="title mt-4">Paises</h1>
        <div className="row">
          <ComponentPais/>
        </div>
      </>
    );
  }
}
