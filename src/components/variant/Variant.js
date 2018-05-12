import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'

const Variant = props => {
  return (
    <tr>
      <th scope="row">{props.row.variantId}</th>
      <td>{props.row.name}</td>
      <td>{props.row.color}</td>
      {/* <td>{props.row.images}</td> */}
      <td>{props.row.modelID}</td>
      <td>{props.row.pricesold}</td>
      <td>{props.row.storage}</td>
      <td>
        <Link to={`/admin/variants/${props.row.variantId}`}>
          <Button outline color="info">
            View
          </Button>
        </Link>
        <Link to={`/admin/variants/${props.row.variantId}/edit`}>
          <Button outline color="success">
            Edit
          </Button>
        </Link>
        <Button outline color="danger" onClick={props.deleteVariant(props.row.variantId)}>
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default Variant
