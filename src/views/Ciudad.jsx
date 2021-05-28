import React from 'react';

import { ComponentCiudad } from '../components/ciudad/ComponentCiudad'
export class Ciudad extends React.Component {
    render(){
        return(
            <>
                <h1 className="title mt-4">Ciudades</h1>
                <div>
                    <ComponentCiudad/>                        
                </div>
            </>
        )
    }
}