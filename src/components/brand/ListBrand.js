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

const ListBrand = props => {
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.map((row, i) => (
                    <Brand row={row} key={i} deleteBrand={props.deleteBrand} />
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
  );
};

export default ListBrand;
