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

const ListModel = props => {
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
              <Table responsive {...{ hover: true, bordered: true }}>
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
                  {props.data.map((row, i) => (
                    <Model
                      row={row}
                      key={i}
                      // deleteBrand={props.deleteBrand}
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
  );
};

export default ListModel;
