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

import UploadComponent from '../share/UploadComponent'

class FormVariant extends Component {
  generateImageList = images => {
    return (
      <div className="row">
        {images.map((image, i) => {
          return (
            <div className="mb-3 col-12 col-sm-6 col-md-4" key={i}>
              <img key={i} src={image} alt="" className="card-img-top" />
            </div>
          )
        })}
      </div>
    )
  }

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

    const buttonEdit =
      this.props.action === 'show' ? (
        <Link to={`/admin/variants/${this.props.id}/edit`}>
          <Button outline color="success">
            Edit
          </Button>
        </Link>
      ) : null

    const title =
      this.props.action === 'new'
        ? 'New Variant'
        : this.props.action === 'show' ? 'Show Variant' : 'Edit Variant'

    const imagesList =
      this.props.action === 'new' || this.props.action === 'edit' ? (
        <UploadComponent
          token={this.props.token}
          handleAddImageSuccess={this.props.handleAddImageSuccess}
          handleRemoveImage={this.props.handleRemoveImage}
        />
      ) : (
        this.generateImageList(this.props.formData.images)
      )

    let options = []
    options.push(<option key={''} value={''} />)

    this.props.modelOptions.length > 0 &&
      this.props.modelOptions.forEach(option =>
        options.push(
          <option key={option.modelID} value={option.modelID}>
            {option.name}
          </option>
        )
      )

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
                <FormGroup>{imagesList}</FormGroup>
                <FormGroup>
                  <Label for="name">Model</Label>
                  <Input
                    type="select"
                    name="select"
                    id="modelID"
                    value={this.props.formData.modelID}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  >
                    {options}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="name">Price Sold</Label>
                  <Input
                    type="text"
                    id="pricesold"
                    value={this.props.formData.pricesold}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                    name="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Storage</Label>
                  <Input
                    type="text"
                    id="storage"
                    value={this.props.formData.storage}
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

export default FormVariant
