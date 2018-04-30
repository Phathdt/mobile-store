import React, { Component } from 'react'
import ListBrand from '../../components/brand/ListBrand'
import Api from 'Api'
import swal from 'sweetalert2'

class ListBrandPage extends Component {
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
    let response = await this.getListBrand(0)
    this.setState({
      data: response.content,
      currentPage: response.number,
      totalPages: response.totalPages,
      totalElements: response.totalElements
    })
  }

  getListBrand = async page => {
    try {
      let { token } = this.state
      let res = await Api.getListBrand(token, page)

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
    let response = await this.getListBrand(page - 1)
    this.setState({
      currentPage: response.number,
      data: response.content
    })
  }

  deleteBrand = brandId => async e => {
    let result = await swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this brand!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    })

    if (result.value) {
      let { token, currentPage } = this.state
      let res = await Api.deleteBrand(token, brandId)

      if (res.status === 200) {
        swal('Deleted!', 'Your brand has been deleted.', 'success')
        let res = await Api.getListBrand(token, currentPage)
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
      swal('Cancelled', 'Your brand is safe :)', 'error')
    }
  }

  render() {
    if (this.state.data.length >= 0) {
      return (
        <div>
          <ListBrand
            data={this.state.data}
            currentPage={this.state.currentPage + 1}
            totalElements={this.state.totalElements}
            totalPages={this.state.totalPages}
            PageChange={this.onPageChange}
            deleteBrand={this.deleteBrand}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

export default ListBrandPage
