import React, { Component } from 'react'

import Page from 'components/Page'
import FormVariant from './FormVariant'
import Api from 'Api'

class EditVariantPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      id: '',
      name: '',
      color: '',
      modelID: '',
      pricesold: '',
      images: [],
      storage: '',
      modelOptions: [],
      isLoaded: false
    }
  }

  async componentWillMount() {
    let response = await this.getVariant(this.props.match.params.id)
    await this.setState({
      id: response.variantId,
      name: response.name,
      color: response.color,
      storage: response.storage,
      modelID: response.modelID,
      pricesold: response.pricesold,
      images: response.images.map(image => image.imageURL)
    })

    let responsemodels = await this.getAllModel()
    await this.setState({
      modelOptions: responsemodels.content,
      isLoaded: true
    })
  }

  getVariant = async id => {
    let { token } = this.state
    let res = await Api.getVariant(token, id)

    if (res.status === 401) {
      alert('something went wrong')
    } else {
      let resJson = await res.json()
      return resJson.data
    }
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
      id: this.state.variantId,
      name: this.state.name,
      color: this.state.color,
      storage: this.state.storage,
      modelID: this.state.modelID,
      pricesold: this.state.pricesold
    }

    let { token, id } = this.state
    let res = await Api.editVariant(token, id, body)

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
      this.state.storage.length > 0
      //   this.state.images >= 0 &&
    )
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <Page
          title="Edit Variant"
          breadcrumbs={[{ name: 'Edit Variant', active: true }]}
        >
          <FormVariant
            handleSubmit={this.handleSubmit}
            validateForm={this.validateForm}
            handleChange={this.handleChange}
            modelOptions={this.state.modelOptions}
            list
            action="edit"
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

export default EditVariantPage
