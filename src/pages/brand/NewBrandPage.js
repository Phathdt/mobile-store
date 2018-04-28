import React, { Component } from 'react';

import Page from 'components/Page';
import FormBrand from './FormBrand';
import Api from 'Api';

class NewBrandPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.token,
      name: '',
      country: '',
      desc: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const body = {
      name: this.state.name,
      country: this.state.country,
      description: this.state.desc
    };
    let { token } = this.state;
    let res = await Api.createBrand(token, body);

    if (res.status === 401) {
      alert('something went wrong');
    } else {
      this.props.history.push('/admin/brands');
    }
  };

  validateForm = () => {
    return (
      this.state.name.length > 0 &&
      this.state.country.length > 0 &&
      this.state.desc.length > 0
    );
  };

  render() {
    return (
      <Page
        title="New Brands"
        breadcrumbs={[{ name: 'New Brands', active: true }]}
      >
        <FormBrand
          handleSubmit={this.handleSubmit}
          validateForm={this.validateForm}
          handleChange={this.handleChange}
          action="new"
          disabled={false}
          formData={{
            name: this.state.name,
            country: this.state.country,
            desc: this.state.desc
          }}
        />
      </Page>
    );
  }
}

export default NewBrandPage;
