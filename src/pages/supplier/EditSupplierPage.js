import React, { Component } from 'react'

import Page from 'components/Page'
import FormSupplier from './FormSupplier'
import Api from 'Api'

class EditSupplierPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      id: '',
      name: '',
      email: '',
      address: '',
      phone: '',
      isLoaded: false
    }
  }

  async componentWillMount() {
    let response = await this.getSupplier(this.props.match.params.id)
    await this.setState({
      id: response.supplierID,
      name: response.name,
      email: response.email,
      address: response.address,
      phone: response.phone,
      isLoaded: true
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  getSupplier = async id => {
    let { token } = this.state
    let res = await Api.getSupplier(token, id)

    if (res.status === 401) {
      alert('something went wrong')
    } else {
      let resJson = await res.json()
      return resJson.data
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    let { token, id } = this.state
    const body = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone
    }
    let res = await Api.editSupplier(token, id, body)

    if (res.status === 401) {
      alert('something went wrong')
    } else {
      this.props.history.push('/admin/suppliers')
    }
  }

  validateForm = () => {
    return (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.address.length > 0 &&
      this.state.phone.length > 0
    )
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <Page
          title="Edit Supplier"
          breadcrumbs={[{ name: 'Edit Supplier', active: true }]}
        >
          <FormSupplier
            handleSubmit={this.handleSubmit}
            validateForm={this.validateForm}
            handleChange={this.handleChange}
            disabled={false}
            action="edit"
            formData={{
              name: this.state.name,
              email: this.state.email,
              address: this.state.address,
              phone: this.state.phone
            }}
          />
        </Page>
      )
    } else {
      return null
    }
  }
}

export default EditSupplierPage
