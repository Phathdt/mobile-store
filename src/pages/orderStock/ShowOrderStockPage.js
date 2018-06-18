import React, { Component } from 'react'

import Page from 'components/Page'
import FormOrderStock from './FormOrderStock'
import Api from 'Api'
import Validate from 'Validate'

class ShowOrderStockPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      supplierID: '',
      date: '',
      total: 0,
      stockReceivingItemList: [],
      supplierOptions: [],
      variantOptions: [],
      isLoaded: false
    }
  }

  async componentWillMount() {
    let suppliers = await this.getAllSupplier()
    let variants = await this.getAllVariant()
    let orderStock = await this.getOrderStock(this.props.match.params.id)
    let total = 0
    orderStock.stockReceivingItemList.forEach(variant => {
      variant.variantId = variant.itemList[0].variantId
      variant.price = variants.content.find(
        t => t.variantId == variant.variantId
      ).pricesold
      total = variant.price * variant.quantity
    })
    await this.setState({
      supplierOptions: suppliers.content,
      variantOptions: variants.content,
      isLoaded: true,
      date: new Date(orderStock.date).toISOString().slice(0, 10),
      supplierID: orderStock.supplierID,
      stockReceivingItemList: orderStock.stockReceivingItemList,
      total: total
    })
  }

  getOrderStock = async id => {
    let { token } = this.state
    let res = await Api.getOrderStock(token, id)

    if (res.status === 401) {
      alert('something went wrong')
    } else {
      let resJson = await res.json()
      return resJson.data
    }
  }

  getAllSupplier = async () => {
    try {
      let { token } = this.state
      let res = await Api.getListSupplier(token, 0, 100)

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

  handleAddVariant = () => {
    let rowVariant = {
      itemList: [],
      priceBought: 0,
      quantity: 0,
      variantId: '',
      price: 0
    }

    let stock = this.state.stockReceivingItemList
    stock.push(rowVariant)

    this.setState({
      stockReceivingItemList: stock
    })
  }

  handleChangeVariant = idx => evt => {
    let variant = this.state.variantOptions.find(
      variant => variant.variantId == evt.target.value
    )
    let stock = this.state.stockReceivingItemList[idx]
    stock.variantId = evt.target.value
    stock.price = variant.pricesold

    this.setState({
      stockReceivingItemList: this.state.stockReceivingItemList
    })
  }

  handleRemoveVariant = idx => evt => {
    let allStock = this.state.stockReceivingItemList
    allStock.splice(idx, 1)

    this.setState({
      stockReceivingItemList: allStock
    })
  }

  handleAddItem = idx => evt => {
    let rowItem = {
      imei: '',
      note: '',
      serializerNumber: '',
      name: ''
    }

    let variant = this.state.stockReceivingItemList[idx]
    variant.quantity += 1
    variant.priceBought = variant.quantity * variant.price
    variant.itemList.push(rowItem)

    this.setState({
      stockReceivingItemList: this.state.stockReceivingItemList,
      total: this.state.total + variant.price
    })
  }

  handleRemoveItem = (variantIdx, idx) => evt => {
    let variant = this.state.stockReceivingItemList[variantIdx]
    variant.itemList.splice(idx, 1)
    variant.quantity -= 1
    variant.priceBought = variant.quantity * variant.price

    this.setState({
      stockReceivingItemList: this.state.stockReceivingItemList,
      total: this.state.total - variant.price
    })
  }

  handleChangeItem = (variantIdx, idx) => evt => {
    let item = this.state.stockReceivingItemList[variantIdx].itemList[idx]
    item[evt.target.id] = evt.target.value

    this.setState({
      stockReceivingItemList: this.state.stockReceivingItemList
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    let stockInfo = JSON.parse(
      JSON.stringify(this.state.stockReceivingItemList)
    )
    stockInfo.forEach(variant => {
      variant.itemList.forEach(item => {
        item.variantId = variant.variantId
        item.status = 'IN_STOCK'
      })
      delete variant.price
      delete variant.variantId
    })
    const body = {
      date: this.state.date,
      stockReceivingItemList: stockInfo,
      supplierID: this.state.supplierID
    }

    let { token } = this.state
    let res = await Api.createStockOrder(token, body)

    if (res.status === 401) {
      alert('something went wrong')
    } else {
      this.props.history.push('/admin/suppliers')
    }
  }

  validateForm = () => {
    let { supplierID } = this.state

    return supplierID.length > 0
  }

  render() {
    return (
      <Page
        title="Show Order Stock"
        breadcrumbs={[{ name: 'Show Order Stock', active: true }]}
      >
        <FormOrderStock
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
            supplierID: this.state.supplierID,
            date: this.state.date,
            stockReceivingItemList: this.state.stockReceivingItemList,
            total: this.state.total
          }}
        />
      </Page>
    )
  }
}

export default ShowOrderStockPage
