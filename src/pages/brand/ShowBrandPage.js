import React, { Component } from 'react';

import { HOST } from '../../Constants';

class ShowBrandPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.token,
      data: {}
    };
  }

  async componentWillMount() {
    let response = await this.getBrandId(this.props.match.params.id);
    this.setState({
      data: response
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
    if (this.state.data !== {}) {
      return (
        <div>
          <h1>{this.state.data.name}</h1>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ShowBrandPage;
