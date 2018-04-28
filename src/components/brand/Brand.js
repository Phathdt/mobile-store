import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

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
        <td>
          <Link to={`/admin/brands/${row.brandId}`}>
            <Button outline color="info">
              View
            </Button>
          </Link>
          <Link to={`/admin/brands/${row.brandId}/edit`}>
            <Button outline color="success">
              Edit
            </Button>
          </Link>
          <Button
            outline
            color="danger"
            onClick={this.props.deleteBrand(row.brandId)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

export default Brand;
