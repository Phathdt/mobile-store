import React, { Component } from 'react'
import ListOrderBill from '../../components/orderBill/ListOrderBill'
import Api from 'Api'
import swal from 'sweetalert2'

class ListOrderBillPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
      data: [],
      isLoaded: false
    }
  }

  async componentWillMount() {
    let response = await this.getListOrderBill(0)
    await this.setState({
      data: response.content,
      currentPage: response.number,
      totalPages: response.totalPages,
      totalElements: response.totalElements,
      isLoaded: true
    })
  }

  getListOrderBill = async page => {
    try {
      let { token } = this.state
      let res = await Api.getListOrderBill(token, page)

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

  onPageChange = async page => {
    let response = await this.getListOrderBill(page - 1)
    this.setState({
      currentPage: response.number,
      data: response.content
    })
  }

  deleteOrderBill = orderBillId => async e => {
    let result = await swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this order Stock!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    })

    if (result.value) {
      let { token, currentPage } = this.state
      let res = await Api.deleteOrderBill(token, orderBillId)

      if (res.status === 200) {
        swal('Deleted!', 'Your order stock has been deleted.', 'success')
        let res = await Api.getListOrderBill(token, currentPage)
        if (res.status === 401) {
          alert('something went wrong')
        } else {
          let resJson = await res.json()
          await this.setState({
            currentPage: resJson.data.number,
            data: resJson.data.content,
            totalPages: resJson.data.totalPages
          })
        }
      }
    } else {
      swal('Cancelled', 'Your order stock is safe :)', 'error')
    }
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <ListOrderBill
            data={this.state.data}
            currentPage={this.state.currentPage + 1}
            suppliers={this.state.suppliers}
            totalElements={this.state.totalElements}
            totalPages={this.state.totalPages}
            PageChange={this.onPageChange}
            deleteOrderBill={this.deleteOrderBill}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

export default ListOrderBillPage
