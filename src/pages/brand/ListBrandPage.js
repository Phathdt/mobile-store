import React, { Component } from 'react';
import ListBrand from '../../components/brand/ListBrand';

class ListBrandPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.token,
      currentPage: 0,
      data: []
    };
  }

  async componentWillMount() {
    let response = await this.getListBrand();
    this.setState({
      data: response.content,
      currentPage: this.state.currentPage + 1,
      totalPages: response.totalPages
    });
  }

  getListBrand = async () => {
    try {
      let res = await fetch(`/brand/list/10/${this.state.currentPage}`, {
        method: 'GET',
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
    return (
      <div>
        <ListBrand data={this.state.data} />
      </div>
    );
  }
}

export default ListBrandPage;
