import React, { Component } from 'react';
import { Link } from  'react-router-dom';

import { connect } from 'react-redux';
import { fetchProductoById } from '../actions/productosActions';

class EditarProducto extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProductoById(id);
  }

  renderInfo = (producto) => {
    const { id, nombre, precio } = producto;
    return(<form>
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
  }

  renderProgress = () => {
    return (
      <div className="progress mt-5">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
      </div>
    )
  }

  render() {
    return(
      <div>
        {
          this.props.productoSelected !== null ?
          this.renderInfo(this.props.productoSelected) :
          this.renderProgress()
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
    productoSelected: state.listado.productoSelected
})
 
export default connect(mapStateToProps, { fetchProductoById })(EditarProducto);
