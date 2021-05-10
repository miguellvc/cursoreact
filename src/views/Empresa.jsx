import React from 'react';

import { ComponentEmpresa } from '../components/empresa/ComponentEmpresa' 
export class Empresa extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <h1 className="title mt-4">Empresas</h1>
                <div className="row">
                    <ComponentEmpresa/>                    
                </div>
            </>
        )
    }
}