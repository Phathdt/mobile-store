import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'

const Model = props => {
  return (
    <tr>
      <th scope="row">{props.row.brandId}</th>
      <td>{props.row.name}</td>
      <td>{props.row.color}</td>
      <td>{props.row.specification}</td>
      <td>{props.row.brandID}</td>
      <td>{props.row.type}</td>
      <td>{props.row.description}</td>
      <td>
        <Link to={`/admin/models/${props.row.brandId}`}>
          <Button outline color="info">
            View
          </Button>
        </Link>
        <Link to={`/admin/models/${props.row.brandId}/edit`}>
          <Button outline color="success">
            Edit
          </Button>
        </Link>
        <Button outline color="danger">
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default Model
