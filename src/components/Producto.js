import React, { Component } from 'react'

export class Producto extends Component {
  render() {
    const {id, nombre, precio} = this.props.info;
    return (
      <tr class="table-warning">
        <th scope="row">{id}</th>
        <td>{nombre}</td>
        <td>{precio}</td>
        <td>Column content</td>
      </tr>
    )
  }
}

export default Producto