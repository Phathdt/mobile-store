import React, { Component } from 'react';

import Page from 'components/Page';
import FormModel from './FormModel';
import Api from 'Api';

class EditModelPage extends Component {
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
    console.log(response);
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

    console.log(this.state);
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

  handleChange = async event => {
    await this.setState({
      [event.target.id]: event.target.value
    });
    console.log(this.state);
  };

  handleSubmit = async event => {
    event.preventDefault();
    const body = {
      name: this.state.name,
      color: this.state.color,
      description: this.state.description,
      brandID: this.state.brandID,
      specification: this.state.specification,
      type: this.state.type
    };
    let { token, id } = this.state;
    let res = await Api.editModel(token, id, body);

    if (res.status === 401) {
      alert('something went wrong');
    } else {
      this.props.history.push('/admin/models');
    }
  };

  validateForm = () => {
    return (
      this.state.name.length > 0 &&
      this.state.color.length > 0 &&
      this.state.specification.length > 0 &&
      this.state.brandID !== 0 &&
      this.state.type >= 0 &&
      this.state.description.length > 0
    );
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <Page
          title="Show Model"
          breadcrumbs={[{ name: 'Show Model', active: true }]}
        >
          <FormModel
            handleSubmit={this.handleSubmit}
            validateForm={this.validateForm}
            handleChange={this.handleChange}
            brandOptions={this.state.brandOptions}
            list
            action="edit"
            disabled={false}
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

export default EditModelPage;
