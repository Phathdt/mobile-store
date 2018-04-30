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

class FormBrand extends Component {
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
      <Link to={`/admin/brands/${this.props.id}/edit`}>
        <Button outline color="success">
          Edit
        </Button>
      </Link>
    ) : null

    const title =
      this.props.action === 'new'
        ? 'New Brand'
        : this.props.action === 'show' ? 'Show Brand' : 'Edit Brand'
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
                    name="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input
                    type="text"
                    id="country"
                    value={this.props.formData.country}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                    name="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="textarea"
                    id="desc"
                    value={this.props.formData.desc}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                    name="text"
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

export default FormBrand
