import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'

const Brand = props => {
  return (
    <tr>
      <th scope="row">{props.row.brandId}</th>
      <td>{props.row.name}</td>
      <td>{props.row.country}</td>
      <td>{props.row.description}</td>
      <td>
        <Link to={`/admin/brands/${props.row.brandId}`}>
          <Button outline color="info">
            View
          </Button>
        </Link>
        <Link to={`/admin/brands/${props.row.brandId}/edit`}>
          <Button outline color="success">
            Edit
          </Button>
        </Link>
        <Button
          outline
          color="danger"
          onClick={props.deleteBrand(props.row.brandId)}
        >
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default Brand
