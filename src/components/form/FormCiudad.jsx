import React from "react";
import { checkString } from "../../util/validator";
import { getPaises } from "../../controllers/pais";
export class FormCiudad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreCiudad: "",
      codPais: "",
      paises: []
    };
    
  }

  componentDidMount() {
    getPaises()
      .then(resp => {
          this.setState({paises: resp.data});
      })
  }

  submitForm(e) {
    e.preventDefault();
    if (!checkString(this.state.codPais) ||
        !checkString(this.state.nombreCiudad)
        ) {
      alert("Hay campos vacíos");
      return;
    }

    const newCiudad = {
      name: this.state.nombreCiudad,
      countrieId: this.state.codPais,
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
                name="codPais" 
                id="selectPais"
                className="form-select"
                onChange={(e) => this.inputChange(e)}
                value={this.state.codPais}>
                  <option value={JSON.stringify({})}>Select País</option>
                  {
                      this.state.paises
                       .map(pais => <option key={pais.id} value={pais.id}>{pais.name}</option>)
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