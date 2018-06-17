import React, { Component } from 'react'

import Page from 'components/Page'
import FormOrderBill from './FormOrderBill'
import Api from 'Api'

import swal from 'sweetalert2'

class NewOrderBillPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      address: '',
      customerName: '',
      date: '',
      email: '',
      note: '',
      orderDetailBindingModelList: [],
      phone: '',
      total: 0,
      variantOptions: [],
      isLoaded: false
    }
  }

  async componentWillMount() {
    let variants = await this.getAllVariant()

    await this.setState({
      variantOptions: variants.content,
      isLoaded: true
    })

    this.handleAddVariant()
  }

  handleAddVariant = () => {
    let rowVariant = {
      countNumber: 0,
      priceEachUnit: 0,
      variantID: 0,
      total: 0
    }

    let variant = this.state.orderDetailBindingModelList
    variant.push(rowVariant)

    this.setState({
      orderDetailBindingModelList: variant
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

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleChangeVariant = idx => evt => {
    let variant = this.state.variantOptions.find(
      variant => variant.variantId == evt.target.value
    )

    let stock = this.state.orderDetailBindingModelList[idx]
    stock.priceEachUnit = variant.pricesold
    stock.variantID = variant.variantId

    this.setState({
      orderDetailBindingModelList: this.state.orderDetailBindingModelList
    })
  }

  handleRemoveVariant = idx => evt => {
    let allStock = this.state.orderDetailBindingModelList
    allStock.splice(idx, 1)

    this.setState({
      orderDetailBindingModelList: allStock
    })
  }

  handleChangeProperty = idx => evt => {
    let variant = this.state.orderDetailBindingModelList[idx]
    variant[evt.target.id] = parseInt(evt.target.value)

    variant.total =
      parseInt(variant.countNumber) * parseInt(variant.priceEachUnit)

    let total = 0

    this.state.orderDetailBindingModelList.forEach(
      variant => (total += variant.total)
    )
    this.setState({
      orderDetailBindingModelList: this.state.orderDetailBindingModelList,
      total: total
    })
  }

  handleSubmit = async event => {
    event.preventDefault()

    let variants = JSON.parse(
      JSON.stringify(this.state.orderDetailBindingModelList)
    )

    let options = await this.checkValid(variants)

    if (options.length == 0) {
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
        this.props.history.push('/admin/order_bills')
      }
    } else {
      let item = this.state.variantOptions.find(v => v.variantId == options[0])
      swal('Oh noes!', `${item.name} not enough`, 'error')
    }
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

  validateForm = () => {
    let { address, customerName, date, phone } = this.state

    return (
      address.length > 0 &&
      customerName.length > 0 &&
      date.length > 0 &&
      phone.length > 8
    )
  }

  render() {
    return (
      <Page
        title="New Order Bill"
        breadcrumbs={[{ name: 'New Order Bill', active: true }]}
      >
        <FormOrderBill
          handleSubmit={this.handleSubmit}
          validateForm={this.validateForm}
          handleChange={this.handleChange}
          handleAddVariant={this.handleAddVariant}
          handleChangeVariant={this.handleChangeVariant}
          handleRemoveVariant={this.handleRemoveVariant}
          handleChangeProperty={this.handleChangeProperty}
          variantOptions={this.state.variantOptions}
          action="new"
          disabled={false}
          formData={{
            address: this.state.address,
            customerName: this.state.customerName,
            date: this.state.date,
            email: this.state.email,
            note: this.state.note,
            orderDetailBindingModelList: this.state.orderDetailBindingModelList,
            phone: this.state.phone,
            total: this.state.total,
            isLoaded: false
          }}
        />
      </Page>
    )
  }
}

export default NewOrderBillPage
