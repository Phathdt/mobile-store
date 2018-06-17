import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'

const OrderBill = props => {
  return (
    <tr>
      <th scope="row">{props.row.stockReceivingOrderID}</th>
      <td>
        {
          props.suppliers.find(
            supplier => supplier.supplierID == props.row.supplierID
          ).name
        }
      </td>
      <td>{new Date(props.row.date).toLocaleDateString()}</td>
      <td>
        <Link to={`/admin/order_stocks/${props.row.stockReceivingOrderID}`}>
          <Button outline color="info">
            View
          </Button>
        </Link>
        <Button
          outline
          color="danger"
          onClick={props.deleteOrderStock(props.row.stockReceivingOrderID)}
        >
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default OrderBill
