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
  Input,
  Table
} from 'reactstrap'

import { Link } from 'react-router-dom'
import { AvForm, AvField } from 'availity-reactstrap-validation'

class FormOrderBill extends Component {
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

    let optionsVariant = []
    optionsVariant.push(<option key={''} value={''} />)

    this.props.variantOptions.length > 0 &&
      this.props.variantOptions.forEach(option =>
        optionsVariant.push(
          <option key={option.variantId} value={option.variantId}>
            {option.name}
          </option>
        )
      )

    const title =
      this.props.action === 'new'
        ? 'New Order Stock'
        : this.props.action === 'show' ? 'Show Order Stock' : 'Edit Order Stock'

    let header = (
      <tr>
        <th>itemID</th>
        <th>Variant</th>
        <th>imei</th>
        <th>serializerNumber</th>
        <th>Price</th>
      </tr>
    )

    let items =
      this.props.formData.listItems &&
      this.props.formData.listItems.map((row, idx) => (
        <tr key={idx}>
          <td>{row.itemID}</td>
          <td>
            {
              this.props.variantOptions.find(t => t.variantId == row.variantID)
                .name
            }
          </td>
          <td>{row.imei}</td>
          <td>{row.serializerNumber}</td>
          <td>{row.price.toLocaleString()} VND</td>
        </tr>
      ))

    let variants =
      this.props.formData.orderDetailBindingModelList &&
      this.props.formData.orderDetailBindingModelList.map((rowVariant, idx) => (
        <div className="row" key={idx}>
          <div className="col-md-2">
            <FormGroup>
              <Input
                type="select"
                name="select"
                id="variantId"
                value={rowVariant.variantId}
                onChange={this.props.handleChangeVariant(idx)}
                disabled={this.props.disabled}
              >
                {optionsVariant}
              </Input>
            </FormGroup>
          </div>
          <div className="col-md-2">
            <FormGroup>
              <Input
                type="number"
                id="countNumber"
                min="0"
                value={rowVariant.countNumber}
                placeholder="Quantity"
                onChange={this.props.handleChangeProperty(idx)}
                disabled={this.props.disabled}
              />
            </FormGroup>
          </div>
          <div className="col-md-2">
            <FormGroup>
              <Input
                type="number"
                id="priceEachUnit"
                min="0"
                placeholder="Price"
                value={rowVariant.priceEachUnit}
                onChange={this.props.handleChangeProperty(idx)}
                disabled={this.props.disabled}
              />
            </FormGroup>
          </div>
          <div className="col-md-2">
            {this.props.action != 'show' ? (
              <Col sm={{ size: 10 }}>
                <Button onClick={this.props.handleRemoveVariant(idx)}>
                  Remove Variant
                </Button>
              </Col>
            ) : null}
          </div>
          <div className="col-md-4">
            <h3 className="text-right">
              Price: {rowVariant.total.toLocaleString()} VND
            </h3>
          </div>
        </div>
      ))
    return (
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>{title}</CardHeader>
            <CardBody>
              <AvForm>
                <FormGroup>
                  <Label for="address">Customer Name</Label>
                  <Input
                    type="text"
                    id="customerName"
                    required
                    value={this.props.formData.customerName}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    id="address"
                    required
                    value={this.props.formData.address}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  />
                </FormGroup>
                <FormGroup>
                  <AvField
                    name="email"
                    label="Email"
                    type="email"
                    required
                    value={this.props.formData.email}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">phone</Label>
                  <Input
                    type="text"
                    id="phone"
                    required
                    value={this.props.formData.phone}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Date</Label>
                  <Input
                    type="date"
                    id="date"
                    value={this.props.formData.date}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Note</Label>
                  <Input
                    type="text"
                    id="note"
                    value={this.props.formData.note}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  />
                </FormGroup>
                {variants}
                <div className="row">
                  <div className="col-md-2">
                    {this.props.action != 'show' ? (
                      <Col sm={{ size: 10 }}>
                        <Button onClick={this.props.handleAddVariant}>
                          Add Variant
                        </Button>
                      </Col>
                    ) : null}
                  </div>
                </div>
                <CardBody>
                  <Table responsive {...{ hover: true, bordered: true }}>
                    <thead>
                      {this.props.formData.listItems ? header : null}
                    </thead>
                    <tbody>
                      {this.props.formData.listItems ? items : null}
                    </tbody>
                  </Table>
                </CardBody>
                <div className="row">
                  <Col sm={{ size: 12, offset: 20 }}>
                    <h3 className="text-right">
                      Total: {this.props.formData.total.toLocaleString()} VND
                    </h3>
                  </Col>
                </div>
                {buttonSummit}
              </AvForm>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default FormOrderBill
