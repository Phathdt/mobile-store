import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'

const Supplier = props => {
  return (
    <tr>
      <th scope="row">{props.row.supplierID}</th>
      <td>{props.row.name}</td>
      <td>{props.row.address}</td>
      <td>{props.row.phone}</td>
      <td>{props.row.email}</td>
      <td>
        <Link to={`/admin/suppliers/${props.row.supplierID}`}>
          <Button outline color="info">
            View
          </Button>
        </Link>
        <Link to={`/admin/Suppliers/${props.row.supplierID}/edit`}>
          <Button outline color="success">
            Edit
          </Button>
        </Link>
        <Button
          outline
          color="danger"
          onClick={props.deleteSupplier(props.row.supplierID)}
        >
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default Supplier
