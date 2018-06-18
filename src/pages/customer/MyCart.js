import React, { Component } from 'react'
import Api from 'Api'

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import swal from 'sweetalert2'

class MyCart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      address: '',
      customerName: '',
      date: new Date().toISOString().slice(0, 10),
      email: '',
      note: '',
      orderDetailBindingModelList: [],
      phone: '',
      total: 0,
      variantOptions: [],
      modal: false,
      modal_backdrop: false,
      variantOptions: [],
      backdrop: true
    }
  }

  async componentWillMount() {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]')
    let total = 0
    cart.forEach(item => (total += item.total))
    let variants = await this.getAllVariant()

    await this.setState({
      orderDetailBindingModelList: cart,
      variantOptions: variants.content,
      total: total
    })
  }

  getAllVariant = async () => {
    try {
      let { token } = this.state
      let res = await Api.getListVariant(token, 0, 100)

      if (res.status === 401) {
        alert('something went wrong')
      } else {
        let resJson = await res.json()
        return resJson.data
      }
    } catch (error) {
      console.log(error)
    }
  }

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal
      })
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`]
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = async () => {
    this.setState({
      modal_backdrop: false
    })
    let variants = JSON.parse(
      JSON.stringify(this.state.orderDetailBindingModelList)
    )
    let options = await this.checkValid(variants)
    if (options.length == 0) {
      variants.forEach(variant => {
        delete variant.src
        delete variant.total
      })

      const body = {
        address: this.state.address,
        customerName: this.state.customerName,
        date: this.state.date,
        email: this.state.email,
        note: this.state.note,
        orderDetailBindingModelList: variants,
        phone: this.state.phone,
        status: 'PENDING',
        total: this.state.total
      }

      let { token } = this.state
      let res = await Api.createOrderBill(token, body)

      if (res.status === 401) {
        alert('something went wrong')
      } else {
        await swal({
          title: 'Success',
          text: 'Your order has been successed, We will contact you',
          type: 'success',
          confirmButtonText: 'Done'
        })

        this.props.history.push('/')
      }
    } else {
      let item = this.state.variantOptions.find(v => v.variantId == options[0])
      swal('Oh noes!', `${item.name} not enough`, 'error')
    }
  }

  handleRemoveVariant = idx => evt => {
    let allStock = this.state.orderDetailBindingModelList
    allStock.splice(idx, 1)

    this.setState({
      orderDetailBindingModelList: allStock
    })
  }

  checkValid = async variants => {
    let valid = true
    let { token } = this.state
    let options = []
    for (let variant of variants) {
      const res = await Api.checkOrderDetailValid(token, variant)
      let resJson = await res.json()
      if (!resJson.success) {
        options.push(variant.variantID)
        return options
      }
    }

    return options
  }

  render() {
    return (
      <Row>
        <Button onClick={this.toggle('backdrop')}>Launch Modal</Button>
        <Modal
          isOpen={this.state.modal_backdrop}
          toggle={this.toggle('backdrop')}
          backdrop={this.state.backdrop}
        >
          <ModalHeader toggle={this.toggle('backdrop')}>
            Customer Infomation
          </ModalHeader>
          <ModalBody>
            <AvForm>
              <FormGroup>
                <Label for="address">Customer Name</Label>
                <Input
                  type="text"
                  id="customerName"
                  required
                  value={this.state.customerName}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  type="text"
                  id="address"
                  required
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <AvField
                  name="email"
                  label="Email"
                  type="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">phone</Label>
                <Input
                  type="text"
                  id="phone"
                  required
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Note</Label>
                <Input
                  type="text"
                  id="note"
                  value={this.state.note}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </AvForm>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              OK
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle('backdrop')}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Row>
    )
  }
}

export default MyCart
