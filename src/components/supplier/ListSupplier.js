import React from 'react'

import { Card, CardHeader, CardBody, Row, Col, Table, Button } from 'reactstrap'

import { Link } from 'react-router-dom'
import UltimatePagination from 'react-ultimate-pagination-bootstrap-4'
import Page from 'components/Page'
import Supplier from './Supplier'

import 'bootstrap/dist/css/bootstrap.min.css'

const ListSupplier = props => {
  return (
    <Page
      title="List Supplier"
      breadcrumbs={[{ name: 'List Supplier', active: true }]}
      className="SupplierPage"
    >
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>
              <Link to="/admin/suppliers/new">
                <Button color="success" active>
                  Add new Supplier
                </Button>
              </Link>
            </CardHeader>
            <CardBody>
              <Table responsive {...{ hover: true, bordered: true }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.map((row, i) => (
                    <Supplier
                      row={row}
                      key={i}
                      deleteSupplier={props.deleteSupplier}
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

export default ListSupplier
