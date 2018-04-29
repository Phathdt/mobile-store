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
import UltimatePagination from 'react-ultimate-pagination-bootstrap-4';
import Page from 'components/Page';
import Model from './Model';

import 'bootstrap/dist/css/bootstrap.min.css';

class ListModel extends Component {
  render() {
    let data = this.props.data;
    const paginate =
      this.props.totalPages > 0 ? (
        <UltimatePagination
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages}
          onChange={this.props.PageChange}
        />
      ) : null;

    return (
      <Page
        title="List Model"
        breadcrumbs={[{ name: 'List Model', active: true }]}
        className="ModelPage"
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>
                <Link to="/admin/models/new">
                  <Button color="success" active>
                    Add new Models
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Color</th>
                      <th>Specification</th>
                      <th>Brand</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, i) => (
                      <Model
                        row={row}
                        key={i}
                        // deleteBrand={this.props.deleteBrand}
                      />
                    ))}
                  </tbody>
                </Table>
                {paginate}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default ListModel;
