import React, { Component } from 'react';
import { Link } from  'react-router-dom';

export class EditarProducto extends Component {
  render() {
    return (
       <form>
        <fieldset className="mt-5">
          <div className="form-group">
            <label>ID</label>
            <input type="number" className="form-control" id="Id" aria-describedby="emailHelp" placeholder="Id del Producto" />
          </div>
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" className="form-control" id="Id" aria-describedby="emailHelp" placeholder="Nombre del Producto" />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input type="number" className="form-control" id="Id" aria-describedby="emailHelp" placeholder="Precio del Producto" />
          </div>
        </fieldset>
        <Link  to={'/'} className="btn btn-danger mr-2">Cancelar</Link>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    )
  }
}

export default EditarProducto
