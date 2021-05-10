import React from "react";
import { StorageData } from "../../controllers/storageData";
import { checkString } from "../../util/validator";

export class FormCiudad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codCiudad: "",
      nombreCiudad: "",
      pais: "",
      paises: []
    };

    
  }

  submitForm(e) {
    e.preventDefault();

    if (!checkString(this.state.codCiudad) ||
        !checkString(this.state.nombreCiudad)
        ||!checkString(this.state.pais)) {
      alert("Hay campos vacíos");
      return;
    }

    const newCiudad = {
      codCiudad: this.state.codCiudad,
      nombreCiudad: this.state.nombreCiudad,
      pais: this.state.pais
    };
    this.props.newCiudad(newCiudad);
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
            <label>Codigo</label>
            <input
              type="text"
              name="codCiudad"
              className=" form-control"
              onChange={(e) => this.inputChange(e)}
              value={this.state.codCiudad}
            />
          </div>

          <div className="mb-3">
            <label>Nombre Ciudad</label>
            <input
              type="text"
              name="nombreCiudad"
              className=" form-control"
              onChange={(e) => this.inputChange(e)}
              value={this.state.nombreCiudad}
            />
          </div>

          <div className="mb-3">
            <label>Pais</label>
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
            <div className="mb-3 text-end">
              <input type="submit" value="Añadir" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </>
    );
  }
}


{/* <div className="input-group mb-3">
					<label className="input-group-text" htmlFor="inputGroupSelect01">
						Responsable
					</label>
					<select className="form-select" id="inputGroupSelect01" 
						onChange={(e) => this.handleSelect(e)}
						value={JSON.stringify(this.state.owner)}
					>
						<option value={JSON.stringify({})}>Select option</option>
                        { this.state.owners.map((owner, index) => (
                            <option key={index+1} value={JSON.stringify(owner)}>{owner.name}</option>
                        ))}
					</select>
				</div> */}