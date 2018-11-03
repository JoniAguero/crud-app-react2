import React, { Component } from 'react';
import { Link } from  'react-router-dom';

import { connect } from 'react-redux';
import { fetchProductoById } from '../actions/productosActions';

class EditarProducto extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProductoById(id);
  }

  render() {

    const {id, nombre, precio} = this.props.productoSelected;
    console.log(id);
    
    if (id !== null) {
      return (
       <form>
        <fieldset className="mt-5">
          <div className="form-group">
            <label>ID</label>
            <input type="number" className="form-control" id="Id" aria-describedby="emailHelp" placeholder={id} />
          </div>
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" className="form-control" id="Id" aria-describedby="emailHelp" placeholder={nombre} />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input type="number" className="form-control" id="Id" aria-describedby="emailHelp" placeholder={precio} />
          </div>
        </fieldset>
        <Link  to={'/'} className="btn btn-danger mr-2">Cancelar</Link>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
      )
    } else {
      return <p>cargando..</p>
    }
  }
}

const mapStateToProps = state => ({
    productoSelected: state.listado.productoSelected
})
 
export default connect(mapStateToProps, { fetchProductoById })(EditarProducto);
