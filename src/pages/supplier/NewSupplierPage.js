import React, { Component } from 'react'

import Page from 'components/Page'
import FormSupplier from './FormSupplier'
import Api from 'Api'

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
    return (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.address.length > 0 &&
      this.state.phone.length > 0
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
