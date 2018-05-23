import React, { Component } from 'react'
import ListSupplier from '../../components/supplier/ListSupplier'
import Api from 'Api'
import swal from 'sweetalert2'

class ListSupplierPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
      data: []
    }
  }

  async componentWillMount() {
    let response = await this.getLisSupplier(0)
    this.setState({
      data: response.content,
      currentPage: response.number,
      totalPages: response.totalPages,
      totalElements: response.totalElements
    })
  }

  getLisSupplier = async page => {
    try {
      let { token } = this.state
      let res = await Api.getListSupplier(token, page)

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
    let response = await this.getLisSupplier(page - 1)
    this.setState({
      currentPage: response.number,
      data: response.content
    })
  }

  deleteSupplier = supplierId => async e => {
    let result = await swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this supplier!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    })

    if (result.value) {
      let { token, currentPage } = this.state
      let res = await Api.deleteSupplier(token, supplierId)

      if (res.status === 200) {
        swal('Deleted!', 'Your Supplier has been deleted.', 'success')
        let res = await Api.getListSupplier(token, currentPage)
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
      swal('Cancelled', 'Your Supplier is safe :)', 'error')
    }
  }

  render() {
    if (this.state.data.length >= 0) {
      return (
        <div>
          <ListSupplier
            data={this.state.data}
            currentPage={this.state.currentPage + 1}
            totalElements={this.state.totalElements}
            totalPages={this.state.totalPages}
            PageChange={this.onPageChange}
            deleteSupplier={this.deleteSupplier}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

export default ListSupplierPage
