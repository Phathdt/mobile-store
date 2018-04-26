import React, { Component } from 'react';

class Brand extends Component {
  render() {
    let row = this.props.row;
    return (
      <tr>
        <th scope="row">{row.brandId}</th>
        <td>{row.name}</td>
        <td>{row.country}</td>
        <td>{row.description}</td>
        <td>{row.active ? 'Active' : 'Disable'}</td>
        <td>{row.name}</td>
      </tr>
    );
  }
}

export default Brand;
