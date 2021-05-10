import React from "react";

import { checkString } from "../../util/validator"
export class FormPais extends React.Component {
  constructor(props) {
    super(props);
    this.state = { codPais: "", nombrePais: "", };
  }

  submitForm(e){
      e.preventDefault();

      if(!checkString(this.state.codPais) || 
        !checkString(this.state.nombrePais)){
        alert('Hay campos vacíos');
        return;
      }

      const newPais = {
        codPais: this.state.codPais,
        nombrePais: this.state.nombrePais,
      }
      this.props.newPais(newPais);
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
            <input type="text" 
              name="codPais" 
              className=" form-control"
              onChange={(e) => this.inputChange(e)}
						  value={this.state.codPais}
            />
          </div>

          <div className="mb-3">
            <label>Nombre País</label>
            <input
              type="text"
              name="nombrePais"
              className=" form-control"
              onChange={(e) => this.inputChange(e)}
						  value={this.state.nombrePais}
            />
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
