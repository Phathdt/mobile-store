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
import Brand from './Brand';

import 'bootstrap/dist/css/bootstrap.min.css';

class ListBrand extends Component {
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
                    {data.map((row, i) => (
                      <Brand
                        row={row}
                        key={i}
                        deleteBrand={this.props.deleteBrand}
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

export default ListBrand;
