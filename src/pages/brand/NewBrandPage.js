import React, { Component } from 'react';

import { HOST } from '../../Constants';

import Page from 'components/Page';
import FormBrand from './FormBrand';

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
    try {
      let res = await fetch(`${HOST}/brand/add`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: this.state.token
        },
        body: JSON.stringify({
          name: this.state.name,
          country: this.state.country,
          description: this.state.desc
        })
      });

      if (res.status === 401) {
        alert('something went wrong');
      } else {
        this.props.history.push('/admin/brands');
      }
    } catch (error) {
      console.log(error);
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
