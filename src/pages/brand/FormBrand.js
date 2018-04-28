import React, { Component } from 'react';

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
} from 'reactstrap';

class FormBrand extends Component {
  render() {
    return (
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>New Brands</CardHeader>
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
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default FormBrand;
