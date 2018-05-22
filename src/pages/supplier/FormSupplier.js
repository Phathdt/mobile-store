import React, { Component } from 'react'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

import { Link } from 'react-router-dom'

class FormSupplier extends Component {
  render() {
    const buttonSummit = !this.props.disabled ? (
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button
            onClick={this.props.handleSubmit}
            disabled={!this.props.validateForm()}
          >
            Submit
          </Button>
        </Col>
      </FormGroup>
    ) : null

    const buttonEdit = this.props.show ? (
      <Link to={`/admin/suppliers/${this.props.id}/edit`}>
        <Button outline color="success">
          Edit
        </Button>
      </Link>
    ) : null

    const title =
      this.props.action === 'new'
        ? 'New Supplier'
        : this.props.action === 'show' ? 'Show Supplier' : 'Edit Supplier'
    return (
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>
              {title}
              {buttonEdit}
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    value={this.props.formData.name}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    value={this.props.formData.email}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    id="address"
                    value={this.props.formData.address}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input
                    type="text"
                    id="phone"
                    value={this.props.formData.phone}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  />
                </FormGroup>
                {buttonSummit}
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default FormSupplier
