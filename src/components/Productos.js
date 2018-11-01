import React, { Component } from 'react'

import { connect } from 'react-redux';
import { fetchProductos } from '../actions/productosActions';

class Productos extends Component {

  componentDidMount() {
    this.props.fetchProductos();
  }
  render() {
    
    return (
      <div>
        <h1>Productos</h1>
      </div>
    )
  }
}


const mapStateToProps = state => ({
    productos: state.listado.productos
})
 
export default connect(mapStateToProps, { fetchProductos })(Productos);
