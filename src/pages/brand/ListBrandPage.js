import React, { Component } from 'react';
import ListBrand from '../../components/brand/ListBrand';

class ListBrandPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.token,
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
      data: []
    };
  }

  async componentWillMount() {
    let response = await this.getListBrand(0);
    this.setState({
      data: response.content,
      currentPage: response.number,
      totalPages: response.totalPages,
      totalElements: response.totalElements
    });
  }

  getListBrand = async page => {
    try {
      let res = await fetch(`/brand/list/10/${page}`, {
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

  onPageChange = async page => {
    let response = await this.getListBrand(page - 1);
    this.setState({
      currentPage: response.number,
      data: response.content
    });
  };

  render() {
    if (this.state.data.length !== 0) {
      return (
        <div>
          <ListBrand
            data={this.state.data}
            currentPage={this.state.currentPage + 1}
            totalElements={this.state.totalElements}
            totalPages={this.state.totalPages}
            PageChange={this.onPageChange}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ListBrandPage;
