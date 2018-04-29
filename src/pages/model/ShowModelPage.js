import React, { Component } from 'react';

import Page from 'components/Page';
import FormModel from './FormModel';
import Api from 'Api';

class ShowModelPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.token,
      id: '',
      name: '',
      color: '',
      specification: '',
      brandID: '',
      description: '',
      type: '',
      brandOptions: [],
      isLoaded: false
    };
  }

  async componentWillMount() {
    let response = await this.getModel(this.props.match.params.id);
    await this.setState({
      id: response.modelID,
      name: response.name,
      color: response.color,
      specification: response.specification,
      brandID: response.brandID,
      description: response.description,
      type: response.type
    });

    let responseBrands = await this.getAllBrand();
    await this.setState({
      brandOptions: responseBrands.content,
      isLoaded: true
    });
  }

  getModel = async id => {
    let { token } = this.state;
    let res = await Api.getModel(token, id);

    if (res.status === 401) {
      alert('something went wrong');
    } else {
      let resJson = await res.json();
      return resJson.data;
    }
  };

  getAllBrand = async () => {
    try {
      let { token } = this.state;
      let res = await Api.getListBrand(token, 0, 100);

      if (res.status === 401) {
        alert('something went wrong');
      } else {
        let resJson = await res.json();
        return resJson.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <Page
          title="Show Model"
          breadcrumbs={[{ name: 'Show Model', active: true }]}
        >
          <FormModel
            brandOptions={this.state.brandOptions}
            list
            action="show"
            disabled={true}
            formData={{
              name: this.state.name,
              color: this.state.color,
              specification: this.state.specification,
              brandID: this.state.brandID,
              type: this.state.type,
              description: this.state.description
            }}
          />
        </Page>
      );
    } else {
      return null;
    }
  }
}

export default ShowModelPage;
