import React, { Component } from 'react'

import ListVariant from '../../components/variant/ListVariant'
import Api from 'Api'
import swal from 'sweetalert2'
class ListVariantPage extends Component {
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
    let response = await this.getListVariant(0)
    this.setState({
      data: response.content,
      currentPage: response.number,
      totalPages: response.totalPages,
      totalElements: response.totalElements
    })
  }

  getListVariant = async page => {
    try {
      let { token } = this.state
      let res = await Api.getListVariant(token, page)

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
    let response = await this.getListVariant(page - 1)
    this.setState({
      currentPage: response.number,
      data: response.content
    })
  }

  deleteVariant = variantId => async e => {
    let result = await swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this variant!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    })

    if (result.value) {
      let { token, currentPage } = this.state
      let res = await Api.deleteVariant(token, variantId)

      if (res.status === 200) {
        swal('Deleted!', 'Your variant has been deleted.', 'success')
        let res = await Api.getListVariant(token, currentPage)
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
      swal('Cancelled', 'Your Variant is safe :)', 'error')
    }
  }

  render() {
    if (this.state.data.length >= 0) {
      return (
        <div>
          <ListVariant
            data={this.state.data}
            currentPage={this.state.currentPage + 1}
            totalElements={this.state.totalElements}
            totalPages={this.state.totalPages}
            PageChange={this.onPageChange}
            deleteVariant={this.deleteVariant}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

export default ListVariantPage
