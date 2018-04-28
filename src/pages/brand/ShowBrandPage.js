import React, { Component } from 'react';

import { HOST } from '../../Constants';

import Page from 'components/Page';
import FormBrand from './FormBrand';
class ShowBrandPage extends Component {
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

  render() {
    if (this.state.isLoaded) {
      return (
        <Page
          title="Show Brands"
          breadcrumbs={[{ name: 'Show Brands', active: true }]}
        >
          <FormBrand
            disabled={true}
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

export default ShowBrandPage;
