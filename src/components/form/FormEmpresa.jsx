import React from "react";
import { StorageData } from "../../controllers/storageData";
import { checkString } from "../../util/validator";
export class FormEmpresa  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codEmpresa: "",
      nombreEmpresa: "",
      pais: "",
      ciudad: "",
      ciudades: []
    }
  }
  submitForm(e) {
    e.preventDefault();
    if (!checkString(this.state.codEmpresa) ||
        !checkString(this.state.nombreEmpresa)||
        !checkString(this.state.pais)||
        !checkString(this.state.ciudad)) {
        alert("Hay campos vacíos");
        return;
    }
    const newEmpresa = {
      codEmpresa: this.state.codEmpresa,
      nombreEmpresa: this.state.nombreEmpresa,
      pais: this.state.pais,
      ciudad: this.state.ciudad
    };
    this.props.newEmpresa(newEmpresa);
  }

  inputChange(e){
    e.preventDefault();
    this.setState({
			[e.target.name]: e.target.value,
		});
    this.filtrarData(e);
  }
  filtrarData(e) {
    if(e.target.name=== 'pais'){
      let data = StorageData.getData('ciudades');
      data = data.filter(items => items.pais === e.target.value);
      this.setState({ciudades: [...data]});
      console.log(data);
      // console.log('datos del state', this.state.paises);
    }
  }
  render() {
    return (
      <>
        <form onSubmit={(e) => this.submitForm(e)}>
          <div className="mb-3">
            <label>Codigo</label>
            <input
              type="text"
              name="codEmpresa"
              className=" form-control"
              onChange={(e) => this.inputChange(e)}
              value={this.state.codEmpresa}
            />
          </div>

          <div className="mb-3">
            <label>Nombre Empresa</label>
            <input
              type="text"
              name="nombreEmpresa"
              className=" form-control"
              onChange={(e) => this.inputChange(e)}
              value={this.state.nombreEmpresa}
            />
          </div>

          <div className="mb-3">
            <label>País</label>
            <select 
            name="pais" 
            id="selectPais"
            className="form-select"
            onChange={(e) => this.inputChange(e)}
            value={this.state.pais}>
              <option value={JSON.stringify({})}>Select País</option>
              {
                StorageData.getData('paises')
                .map(pais => <option value={pais.nombrePais}>{pais.nombrePais}</option>)
              }
              
            </select>
          </div>

          <div className="mb-3">
            <label>Ciudad</label>
            <select 
            name="ciudad" 
            id="selectCiudad"
            className="form-select"
            onChange={(e) => this.inputChange(e)}
            value={this.state.ciudad}>
              <option value={JSON.stringify({})}>Select País</option>
              {
                this.state.ciudades
                .map(ciudad => <option value={ciudad.nombreCiudad}>{ciudad.nombreCiudad}</option>)
              }
            </select>
          </div>

          <div className="mb-3">
            <div className="mb-3 text-end">
              <input type="submit" value="Añadir" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </>
    );
  }
}
