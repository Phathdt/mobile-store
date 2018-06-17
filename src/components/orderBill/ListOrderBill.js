import React from 'react'

import { Card, CardHeader, CardBody, Row, Col, Table, Button } from 'reactstrap'

import { Link } from 'react-router-dom'
import UltimatePagination from 'react-ultimate-pagination-bootstrap-4'
import Page from 'components/Page'
import OrderStock from './OrderStock'

import 'bootstrap/dist/css/bootstrap.min.css'

const ListOrderBill = props => {
  return (
    <Page
      title="List Order Stock"
      breadcrumbs={[{ name: 'List Order Stock', active: true }]}
      className="OrderStockPage"
    >
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>
              <Link to="/admin/order_stocks/new">
                <Button color="success" active>
                  Add new Order Stock
                </Button>
              </Link>
            </CardHeader>
            <CardBody>
              <Table responsive {...{ hover: true, bordered: true }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Supplier</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.map((row, i) => (
                    <OrderStock
                      row={row}
                      suppliers={props.suppliers}
                      key={i}
                      deleteOrderStock={props.deleteOrderStock}
                    />
                  ))}
                </tbody>
              </Table>
              {props.totalPages > 0 ? (
                <UltimatePagination
                  currentPage={props.currentPage}
                  totalPages={props.totalPages}
                  onChange={props.PageChange}
                />
              ) : null}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  )
}

export default ListOrderBill
