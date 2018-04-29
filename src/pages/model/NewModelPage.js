import React, { Component } from 'react';

import Page from 'components/Page';
import FormModel from './FormModel';
import Api from 'Api';

class NewModelPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.token,
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
    let response = await this.getAllBrand();
    await this.setState({
      brandOptions: response.content,
      isLoaded: true
    });
  }

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
    let { token } = this.state;
    let res = await Api.createModel(token, body);

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
      this.state.brandID.length > 0 &&
      this.state.type.length > 0 &&
      this.state.description.length > 0
    );
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <Page
          title="New Model"
          breadcrumbs={[{ name: 'New Model', active: true }]}
        >
          <FormModel
            handleSubmit={this.handleSubmit}
            validateForm={this.validateForm}
            handleChange={this.handleChange}
            handleChangeSelect={this.handleChangeSelect}
            brandOptions={this.state.brandOptions}
            list
            action="new"
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

export default NewModelPage;
