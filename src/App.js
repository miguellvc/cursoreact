import React from "react";
import { Route, Switch } from 'react-router-dom';

import { NavBar } from "./components/NavBar/NavBar";
import { Trabajos } from "./views/trabajos/Trabajos"
import { Pais } from './views/Pais';
import { Ciudad } from './views/Ciudad';
import { Empresa } from './views/Empresa';

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route path="/" exact component={ Trabajos }/>
          <Route path="/paises" exact component={ Pais }/>
          <Route path="/ciudades" exact component={ Ciudad }/>
          <Route path="/empresas" exact component={ Empresa }/>
        </Switch>
      </div>
    </>
  );
}

export default App;
