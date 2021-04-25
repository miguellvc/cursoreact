import React from 'react'; 

export function Item({puestos}){
    
    return(
        
            puestos.map(puesto =>{
               return <li className="mt-3" key={puesto.id}>
                         { `Puesto: ${puesto.puesto}, País: ${puesto.pais}, Tecnología: ${puesto.tecnologia}.` }
                      </li>
            })
            
          
        
    )
}