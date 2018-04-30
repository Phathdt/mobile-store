import React, { Component } from 'react'

import Page from 'components/Page'
import FormBrand from './FormBrand'
import Api from 'Api'

class EditBrandPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      id: '',
      name: '',
      country: '',
      desc: '',
      isLoaded: false
    }
  }

  async componentWillMount() {
    let response = await this.getBrand(this.props.match.params.id)
    await this.setState({
      id: response.brandId,
      name: response.name,
      country: response.country,
      desc: response.description,
      isLoaded: true
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  getBrand = async id => {
    let { token } = this.state
    let res = await Api.getBrand(token, id)

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
      country: this.state.country,
      description: this.state.desc
    }
    let res = await Api.editBrand(token, id, body)

    if (res.status === 401) {
      alert('something went wrong')
    } else {
      this.props.history.push('/admin/brands')
    }
  }

  validateForm = () => {
    return (
      this.state.name.length > 0 &&
      this.state.country.length > 0 &&
      this.state.desc.length > 0
    )
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <Page
          title="Edit Brand"
          breadcrumbs={[{ name: 'Edit Brand', active: true }]}
        >
          <FormBrand
            handleSubmit={this.handleSubmit}
            validateForm={this.validateForm}
            handleChange={this.handleChange}
            disabled={false}
            action="edit"
            formData={{
              name: this.state.name,
              country: this.state.country,
              desc: this.state.desc
            }}
          />
        </Page>
      )
    } else {
      return null
    }
  }
}

export default EditBrandPage
