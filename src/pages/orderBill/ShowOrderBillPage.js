import React, { Component } from 'react'

import Page from 'components/Page'
import FormOrderBill from './FormOrderBill'
import Api from 'Api'
import Validate from 'Validate'

class ShowOrderBillPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      address: '',
      customerName: '',
      date: '',
      email: '',
      note: '',
      phone: '',
      total: 0,
      variantOptions: [],
      isLoaded: false
    }
  }

  async componentWillMount() {
    let variants = await this.getAllVariant()
    let orderBill = await this.getOrderBill(this.props.match.params.id)
    let orderBillDetail = await this.getOrderBillDetail(
      this.props.match.params.id
    )

    await this.setState({
      variantOptions: variants.content,
      date: new Date(orderBill.date).toISOString().slice(0, 10),
      address: orderBill.address,
      customerName: orderBill.customerName,
      email: orderBill.email,
      note: orderBill.note,
      phone: orderBill.phone,
      total: orderBill.total,
      listItems: orderBillDetail,
      isLoaded: true
    })
  }

  getOrderBillDetail = async id => {
    let { token } = this.state
    let res = await Api.getOrderBillDetail(token, id)

    if (res.status === 401) {
      alert('something went wrong')
    } else {
      let resJson = await res.json()
      let data = await resJson.data
      let items = data.map(e => ({
        itemID: e.itemID,
        variantID: e.item.variantId,
        price: e.price,
        imei: e.item.imei,
        serializerNumber: e.item.serializerNumber
      }))

      return items
    }
  }

  getOrderBill = async id => {
    let { token } = this.state
    let res = await Api.getOrderBill(token, id)

    if (res.status === 401) {
      alert('something went wrong')
    } else {
      let resJson = await res.json()
      return resJson.data
    }
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

  render() {
    return (
      <Page
        title="Show Order Bill"
        breadcrumbs={[{ name: 'Show Order Bill', active: true }]}
      >
        <FormOrderBill
          handleSubmit={this.handleSubmit}
          validateForm={this.validateForm}
          handleChange={this.handleChange}
          handleAddVariant={this.handleAddVariant}
          handleChangeVariant={this.handleChangeVariant}
          handleRemoveVariant={this.handleRemoveVariant}
          handleAddItem={this.handleAddItem}
          handleRemoveItem={this.handleRemoveItem}
          handleChangeItem={this.handleChangeItem}
          supplierOptions={this.state.supplierOptions}
          variantOptions={this.state.variantOptions}
          action="show"
          disabled={true}
          formData={{
            address: this.state.address,
            customerName: this.state.customerName,
            date: this.state.date,
            email: this.state.email,
            note: this.state.note,
            listItems: this.state.listItems,
            phone: this.state.phone,
            total: this.state.total,
            isLoaded: this.state.isLoaded
          }}
        />
      </Page>
    )
  }
}

export default ShowOrderBillPage
