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

import { Link } from 'react-router-dom';

class FormModel extends Component {
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
    ) : null;

    const buttonEdit = this.props.show ? (
      <Link to={`/admin/models/${this.props.id}/edit`}>
        <Button outline color="success">
          Edit
        </Button>
      </Link>
    ) : null;

    const title =
      this.props.action === 'new'
        ? 'New Model'
        : this.props.action === 'show' ? 'Show Model' : 'Edit Model';

    let options = [];
    this.props.brandOptions.length > 0 &&
      this.props.brandOptions.forEach(option =>
        options.push(
          <option key={option.brandId} value={option.brandId}>
            {option.name}
          </option>
        )
      );

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
                  <Label for="name">Color</Label>
                  <Input
                    type="text"
                    id="color"
                    value={this.props.formData.color}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                    name="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Specification</Label>
                  <Input
                    type="text"
                    id="specification"
                    value={this.props.formData.specification}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                    name="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Brand</Label>
                  <Input
                    type="select"
                    name="select"
                    id="brandID"
                    value={this.props.formData.brandID}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  >
                    {options}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="name">Type</Label>
                  <Input
                    type="text"
                    id="type"
                    value={this.props.formData.type}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                    name="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Description</Label>
                  <Input
                    type="text"
                    id="description"
                    value={this.props.formData.description}
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
    );
  }
}

export default FormModel;
