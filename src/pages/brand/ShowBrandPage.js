import React, { Component } from 'react'

import Page from 'components/Page'
import FormBrand from './FormBrand'
import Api from 'Api'

class ShowBrandPage extends Component {
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

  render() {
    if (this.state.isLoaded) {
      return (
        <Page
          title="Show Brand"
          breadcrumbs={[{ name: 'Show Brand', active: true }]}
        >
          <FormBrand
            disabled={true}
            show={true}
            action="show"
            id={this.state.id}
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

export default ShowBrandPage
