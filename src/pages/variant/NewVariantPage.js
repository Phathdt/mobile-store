import React, { Component } from 'react'

import Page from 'components/Page'
import FormVariant from './FormVariant'
import Api from 'Api'

class NewVariantPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      name: '',
      color: '',
      images: '',
      modelID: '',
      pricesold: '',
      storage: '',
      modelOptions: [],
      isLoaded: false
    }
  }

  async componentWillMount() {
    let response = await this.getAllModel()
    await this.setState({
      modelOptions: response.content,
      isLoaded: true
    })
  }

  getAllModel = async () => {
    try {
      let { token } = this.state
      let res = await Api.getListModel(token, 0, 100)

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

  handleChange = async event => {
    await this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const body = {
      name: this.state.name,
      color: this.state.color,
      pricesold: this.state.pricesold,
      modelID: this.state.modelID,
      storage: this.state.storage,
      images: this.state.images
    }
    let { token } = this.state
    let res = await Api.createVariant(token, body)

    if (res.status === 401) {
      alert('something went wrong')
    } else {
      this.props.history.push('/admin/Variants')
    }
  }

  validateForm = () => {
    return (
      this.state.name.length > 0 &&
      this.state.color.length > 0 &&
      this.state.pricesold.length > 0 &&
      this.state.modelID !== 0 &&
    //   this.state.images >= 0 &&
      this.state.storage.length > 0
    )
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <Page
          title="New Variant"
          breadcrumbs={[{ name: 'New Variant', active: true }]}
        >
          <FormVariant
            handleSubmit={this.handleSubmit}
            validateForm={this.validateForm}
            handleChange={this.handleChange}
            modelOptions={this.state.modelOptions}
            list
            action="new"
            disabled={false}
            formData={{
              name: this.state.name,
              color: this.state.color,
              storage: this.state.storage,
              modelID: this.state.modelID,
              pricesold: this.state.pricesold,
              images: this.state.images
            }}
          />
        </Page>
      )
    } else {
      return null
    }
  }
}

export default NewVariantPage
