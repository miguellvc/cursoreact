import React from "react";
import { StorageData } from "../../controllers/storageData";
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
        console.log(resp);
      })
  }
  /*
  {
  "name": "Facebook",
  "placeId": 1
  }
  */ 
  submitForm(e) {
    e.preventDefault();
    // if (!checkString(this.state.codEmpresa) ||
    //     !checkString(this.state.nombreEmpresa)||
    //     !checkString(this.state.pais)||
    //     !checkString(this.state.ciudad)) {
    //     alert("Hay campos vacíos");
    //     return;
    // }
    const newEmpresa = {
      placeId: this.state.placeId,
      name: this.state.name,
    }

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
              <option value={JSON.stringify({})}>Select País</option>
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
