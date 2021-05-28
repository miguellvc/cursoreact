import React from "react";

import { checkString } from "../../util/validator";

import { getEmpresas } from "../../controllers/empresa";
export class FormPuestos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "",
      description: "",
      organizationId: "",
      empresas: [],
    };
  }
  componentDidMount(){
    getEmpresas()
      .then(resp =>{
        this.setState({empresas: resp});
        console.log('empresas desde form puestos', this.state.empresas);
      })
  }

  submitForm(e) {
    e.preventDefault();
    // if (
    //   !checkString(this.state.pais) ||
    //   !checkString(this.state.ciudad) ||
    //   !checkString(this.state.empresa) ||
    //   !checkString(this.state.puesto) ||
    //   !checkString(this.state.tecnologia)
    // ) {
    //   alert("Hay campos vacíos");
    //   return;
    // }

      /* "position": "Desarrollador Backend",
        "description": "Desarrollador Backend php",
        "organizationId": 1*/ 
    const newpuesto = {
      position: this.state.position,
      description: this.state.description,
      organizationId: this.state.organizationId,
    };
    this.props.newPuesto(newpuesto);
  }
  inputChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
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
                    <label>Empresa</label>
                    <select
                      name="organizationId"
                      id="selectEmpresa"
                      className="form-select"
                      onChange={(e) => this.inputChange(e)}
                      value={this.state.empresas.id}
                    >
                      <option value={JSON.stringify({})}>Select empresa</option>
                      {this.state.empresas.map((empresa) => (
                        <option key={empresa.id} value={empresa.id}>
                          {empresa.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div class="mb-3">
                    <label>Puesto Laboral</label>
                    <input
                      type="text"
                      name="position"
                      className=" form-control"
                      onChange={(e) => this.inputChange(e)}
                      value={this.state.position}
                    />
                  </div>

                  <div class="mb-3">
                    <label>Descripción</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={(e) => this.inputChange(e)}
                      value={this.state.description}
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
