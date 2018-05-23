import React, { Component } from 'react'

import Page from 'components/Page'
import FormSupplier from './FormSupplier'
import Api from 'Api'

class ShowSupplierPage extends Component {
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

  render() {
    if (this.state.isLoaded) {
      return (
        <Page
          title="Show Supplier"
          breadcrumbs={[{ name: 'Show Supplier', active: true }]}
        >
          <FormSupplier
            disabled={true}
            show={true}
            action="show"
            id={this.state.id}
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

export default ShowSupplierPage
