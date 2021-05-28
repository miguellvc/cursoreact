import React from "react";

import { checkString } from "../../util/validator";

import { getCiudades } from "../../controllers/ciudad";
export class FormEmpresa  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeId: "",
      name: "",
      ciudades: []
    }
  }
  componentDidMount() {
    getCiudades()
      .then(resp =>{
        this.setState({ciudades : resp})
      })
  } 
  submitForm(e) {
    e.preventDefault();
    if (!checkString(this.state.placeId) ||
        !checkString(this.state.name)) {
        alert("Hay campos vacíos");
        return;
    }
    const newEmpresa = {
      placeId: this.state.placeId,
      name: this.state.name,
    }
    this.props.newEmpresa(newEmpresa);
    // pruebas
  }

  inputChange(e){
    e.preventDefault();
    this.setState({
			[e.target.name]: e.target.value,
		});
  }
  render() {
    return (
      <>
        <form onSubmit={(e) => this.submitForm(e)}>
          
          <div className="mb-3">
            <label>Nombre Empresa</label>
            <input
              type="text"
              name="name"
              className=" form-control"
              onChange={(e) => this.inputChange(e)}
              value={this.state.name}
            />
          </div>

          <div className="mb-3">
            <label>Ciudad</label>
            <select 
            name="placeId" 
            id="selectCiudad"
            className="form-select"
            onChange={(e) => this.inputChange(e)}
            value={this.state.placeId}>
              <option value={JSON.stringify({})}>Select Ciudad</option>
              {
                this.state.ciudades
                .map(ciudad => <option key={ciudad.id} value={ciudad.id}>{ciudad.name}</option>)
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
