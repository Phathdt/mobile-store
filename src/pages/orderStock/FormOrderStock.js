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

class FormOrderStock extends Component {
  renderItemList = (rowVariant, variantIdx) => {
    return rowVariant.itemList.map((item, idx) => (
      <div className="row" key={idx}>
        <FormGroup className="col-md-3">
          <Label for="imei">Imei</Label>
          <Input
            type="text"
            id="imei"
            onChange={this.props.handleChangeItem(variantIdx, idx)}
            value={item.imei}
          />
        </FormGroup>
        <FormGroup className="col-md-3">
          <Label for="serializerNumber">Serial Number</Label>
          <Input
            type="text"
            id="serializerNumber"
            value={item.serializerNumber}
            onChange={this.props.handleChangeItem(variantIdx, idx)}
          />
        </FormGroup>
        <FormGroup className="col-md-3">
          <Label for="note">Note</Label>
          <Input
            type="text"
            id="note"
            value={item.note}
            onChange={this.props.handleChangeItem(variantIdx, idx)}
          />
        </FormGroup>
        <div className="col-md-3 remove-item">
          <Col sm={{ size: 10 }}>
            <Button onClick={this.props.handleRemoveItem(variantIdx, idx)}>
              Remove Item
            </Button>
          </Col>
        </div>
      </div>
    ))
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
        <Link to={`/admin/order_stocks/${this.props.id}/edit`}>
          <Button outline color="success">
            Edit
          </Button>
        </Link>
      ) : null

    const title =
      this.props.action === 'new'
        ? 'New Order Stock'
        : this.props.action === 'show' ? 'Show Order Stock' : 'Edit Order Stock'

    let options = []
    options.push(<option key={''} value={''} />)

    this.props.supplierOptions.length > 0 &&
      this.props.supplierOptions.forEach(option =>
        options.push(
          <option key={option.supplierID} value={option.supplierID}>
            {option.name}
          </option>
        )
      )

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

    let stock = this.props.formData.stockReceivingItemList.map(
      (rowVariant, idx) => (
        <div className="rowVariant" key={idx}>
          <div className="row">
            <div className="col-md-4">
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
              <Col sm={{ size: 10 }}>
                <Button onClick={this.props.handleRemoveVariant(idx)}>
                  Remove Variant
                </Button>
              </Col>
            </div>
            <div className="col-md-1">
              <Col sm={{ size: 10 }}>
                <Button
                  onClick={this.props.handleAddItem(idx)}
                  disabled={rowVariant.variantId == ''}
                >
                  Add Item
                </Button>
              </Col>
            </div>
            <div className="col-md-2">
              <h3>Quantity: {rowVariant.quantity}</h3>
            </div>
            <div className="col-md-3">
              <h3>Price: {rowVariant.priceBought.toLocaleString()} VND</h3>
            </div>
          </div>
          <div className="rowItems">{this.renderItemList(rowVariant, idx)}</div>
        </div>
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
                  <Label for="name">Supplier</Label>
                  <Input
                    type="select"
                    name="select"
                    id="supplierID"
                    value={this.props.formData.supplierID}
                    onChange={this.props.handleChange}
                    disabled={this.props.disabled}
                  >
                    {options}
                  </Input>
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
                {stock}
                <div className="row">
                  <div className="col-md-2">
                    <Col sm={{ size: 10 }}>
                      <Button onClick={this.props.handleAddVariant}>
                        Add Variant
                      </Button>
                    </Col>
                  </div>
                </div>
                <div className="row">
                  <Col sm={{ size: 12, offset: 20 }}>
                    <h3 className="text-right">
                      Total: {this.props.formData.total.toLocaleString()} VND
                    </h3>
                  </Col>
                </div>
                {buttonSummit}
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default FormOrderStock
