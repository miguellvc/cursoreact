import React from 'react';

import { ComponentCiudad } from '../components/ciudad/ComponentCiudad'
export class Ciudad extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //   axios.post('https://api-fake-pilar-tecno.herokuapp.com/places', {
        //     countrieId: 1,
        //     name: 'Córdoba'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    
    }
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