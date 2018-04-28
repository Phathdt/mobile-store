import React, { Component } from 'react';

import { HOST } from '../../Constants';

import Page from 'components/Page';
import FormBrand from './FormBrand';

class EditBrandPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.token,
      id: '',
      name: '',
      country: '',
      desc: '',
      isLoaded: false
    };
  }

  async componentWillMount() {
    let response = await this.getBrandId(this.props.match.params.id);
    await this.setState({
      id: response.brandId,
      name: response.name,
      country: response.country,
      desc: response.description,
      isLoaded: true
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  getBrandId = async id => {
    try {
      let res = await fetch(`${HOST}/brand/get/${id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: this.state.token
        }
      });

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

  handleSubmit = async event => {
    event.preventDefault();
    try {
      let res = await fetch(`${HOST}/brand/update/${this.state.id}`, {
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
    if (this.state.isLoaded) {
      return (
        <Page
          title="New Brands"
          breadcrumbs={[{ name: 'Edit Brands', active: true }]}
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
    } else {
      return null;
    }
  }
}

export default EditBrandPage;
