import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'

const OrderBill = props => {
  return (
    <tr>
      <td scope="row">{props.row.orderBillID}</td>
      <td scope="row">{props.row.customerName}</td>
      <td scope="row">{props.row.phone}</td>
      <td>{new Date(props.row.date).toLocaleDateString()}</td>
      <td>
        <Link to={`/admin/order_bills/${props.row.orderBillID}`}>
          <Button outline color="info">
            View
          </Button>
        </Link>
        <Button
          outline
          color="danger"
          onClick={props.deleteOrderBill(props.row.orderBillID)}
        >
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default OrderBill
