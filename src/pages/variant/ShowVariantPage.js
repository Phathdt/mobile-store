import React, { Component } from 'react'

import Page from 'components/Page'
import FormVariant from './FormVariant'
import Api from 'Api'

class ShowVariantPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      id: '',
      name: '',
      color: '',
      modelID: '',
      pricesold: '',
      images: '',
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

    let responseModels = await this.getAllModel()
    await this.setState({
      modelOptions: responseModels.content,
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

  render() {
    if (this.state.isLoaded) {
      return (
        <Page
          title="Show Variant"
          breadcrumbs={[{ name: 'Show Variant', active: true }]}
        >
          <FormVariant
            modelOptions={this.state.modelOptions}
            list
            action="show"
            disabled={true}
            id={this.state.id}
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

export default ShowVariantPage
