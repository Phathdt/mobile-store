import React, { Component } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Table,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

import Page from 'components/Page';

import Brand from './Brand';

class ListBrand extends Component {
  render() {
    let data = this.props.data;
    return (
      <Page
        title="List Brand"
        breadcrumbs={[{ name: 'List Brand', active: true }]}
        className="BrandPage"
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>
                <Link to="/admin/brands/new">
                  <Button color="success" active>
                    Add new Brand
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Country</th>
                      <th>Description</th>
                      <th>Active</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, i) => <Brand row={row} key={i} />)}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default ListBrand;
