import React, { Component } from 'react'

import Page from 'components/Page'
import FormSupplier from './FormSupplier'
import Api from 'Api'
import Validate from 'Validate'

class NewSupplierPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      name: '',
      email: '',
      address: '',
      phone: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const body = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone
    }

    let { token } = this.state
    let res = await Api.createSupplier(token, body)

    if (res.status === 401) {
      alert('something went wrong')
    } else {
      this.props.history.push('/admin/suppliers')
    }
  }

  validateForm = () => {
    let { name, email, address, phone } = this.state

    return (
      name.length > 0 &&
      Validate.isEmail(email) &&
      address.length > 0 &&
      phone.length > 0
    )
  }

  render() {
    return (
      <Page
        title="New Supplier"
        breadcrumbs={[{ name: 'New Supplier', active: true }]}
      >
        <FormSupplier
          handleSubmit={this.handleSubmit}
          validateForm={this.validateForm}
          handleChange={this.handleChange}
          action="new"
          disabled={false}
          formData={{
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            phone: this.state.phone
          }}
        />
      </Page>
    )
  }
}

export default NewSupplierPage
