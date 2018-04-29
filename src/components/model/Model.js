import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

class Model extends Component {
  render() {
    let row = this.props.row;
    return (
      <tr>
        <th scope="row">{row.brandId}</th>
        <td>{row.name}</td>
        <td>{row.color}</td>
        <td>{row.specification}</td>
        <td>{row.brandID}</td>
        <td>{row.type}</td>
        <td>{row.description}</td>
        <td>
          <Link to={`/admin/models/${row.brandId}`}>
            <Button outline color="info">
              View
            </Button>
          </Link>
          <Link to={`/admin/models/${row.brandId}/edit`}>
            <Button outline color="success">
              Edit
            </Button>
          </Link>
          <Button outline color="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

export default Model;
