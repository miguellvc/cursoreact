import React from "react";
import { StorageData } from "../../controllers/storageData";
import { checkString } from "../../util/validator";
export class FormPuestos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pais: "",
      ciudad: "",
      empresa: "",
      puesto: "",
      tecnologia: "",
      ciudades: [],
      empresas: [],
    };
  }

  submitForm(e) {
    e.preventDefault();
    if (
      !checkString(this.state.pais) ||
      !checkString(this.state.ciudad) ||
      !checkString(this.state.empresa) ||
      !checkString(this.state.puesto) ||
      !checkString(this.state.tecnologia)
    ) {
      alert("Hay campos vacíos");
      return;
    }
    const newpuesto = {
      pais: this.state.pais,
      ciudad: this.state.ciudad,
      empresa: this.state.empresa,
      puesto: this.state.puesto,
      tecnologia: this.state.tecnologia,
    };
    this.props.newPuesto(newpuesto);
  }
  inputChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.filtrarData(e);
  }
  filtrarData(e) {
    if (e.target.name === "pais") {
      let data = StorageData.getData("ciudades");
      data = data.filter((items) => items.pais === e.target.value);
      this.setState({ ciudades: [...data] });
      return;
      // console.log('datos del state', this.state.paises);
    }
    if (e.target.name === "ciudad") {
      let data = StorageData.getData("empresas");
      data = data.filter((items) => items.ciudad === e.target.value);
      this.setState({ empresas: [...data] });
    }
  }
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Añadir puesto laboral
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => this.submitForm(e)}>
                  <div className="mb-3">
                    <label>País</label>
                    <select
                      name="pais"
                      id="selectPais"
                      className="form-select"
                      onChange={(e) => this.inputChange(e)}
                      value={this.state.pais}
                    >
                      <option value={JSON.stringify({})}>Select País</option>
                      {StorageData.getData("paises").map((pais) => (
                        <option value={pais.nombrePais}>
                          {pais.nombrePais}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Ciudad</label>
                    <select
                      name="ciudad"
                      id="selectCiudad"
                      className="form-select"
                      onChange={(e) => this.inputChange(e)}
                      value={this.state.ciudad}
                    >
                      <option value={JSON.stringify({})}>Select ciudad</option>
                      {this.state.ciudades.map((ciudad) => (
                        <option value={ciudad.nombreCiudad}>
                          {ciudad.nombreCiudad}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label>Empresa</label>
                    <select
                      name="empresa"
                      id="selectEmpresa"
                      className="form-select"
                      onChange={(e) => this.inputChange(e)}
                      value={this.state.empresa}
                    >
                      <option value={JSON.stringify({})}>Select empresa</option>
                      {this.state.empresas.map((empresa) => (
                        <option value={empresa.nombreEmpresa}>
                          {empresa.nombreEmpresa}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div class="mb-3">
                    <label>Puesto</label>
                    <input
                      type="text"
                      name="puesto"
                      className=" form-control"
                      onChange={(e) => this.inputChange(e)}
                      value={this.state.puesto}
                    />
                  </div>

                  <div class="mb-3">
                    <label>Tecnología</label>
                    <input
                      type="text"
                      name="tecnologia"
                      className="form-control"
                      onChange={(e) => this.inputChange(e)}
                      value={this.state.tecnologia}
                    />
                  </div>
                    
                  <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  >
                  Close
                </button>
                <input type="submit" value="Añadir" className="btn btn-primary" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
