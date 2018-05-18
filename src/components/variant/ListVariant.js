import React from 'react'

import { Card, CardHeader, CardBody, Row, Col, Table, Button } from 'reactstrap'

import { Link } from 'react-router-dom'
import UltimatePagination from 'react-ultimate-pagination-bootstrap-4'
import Page from 'components/Page'
import Variant from './Variant'

import 'bootstrap/dist/css/bootstrap.min.css'

const ListVariant = props => {
  return (
    <Page
      title="List Variant"
      breadcrumbs={[{ name: 'List Variant', active: true }]}
      className="VariantPage"
    >
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>
              <Link to="/admin/variants/new">
                <Button color="success" active>
                  Add new Variant
                </Button>
              </Link>
            </CardHeader>
            <CardBody>
              <Table responsive {...{ hover: true, bordered: true }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>ModelID</th>
                    <th>PriceSold</th>
                    <th>Storage</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.map((row, i) => (
                    <Variant
                      row={row}
                      key={i}
                      deleteVariant={props.deleteVariant}
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

export default ListVariant
