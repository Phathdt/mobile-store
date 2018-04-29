import React, { Component } from 'react';

import ListModel from '../../components/model/ListModel';
import Api from 'Api';
import swal from 'sweetalert2';
class ListModelPage extends Component {
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

  // async componentWillMount() {
  //   let response = await this.getListModel(0);
  //   this.setState({
  //     data: response.content,
  //     currentPage: response.number,
  //     totalPages: response.totalPages,
  //     totalElements: response.totalElements
  //   });
  // }

  // getListModel = async page => {
  //   try {
  //     let { token } = this.state;
  //     let res = await Api.getListModel(token, page);

  //     if (res.status === 401) {
  //       alert('something went wrong');
  //     } else {
  //       let resJson = await res.json();
  //       return resJson.data;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // onPageChange = async page => {
  //   let response = await this.getListModel(page - 1);
  //   this.setState({
  //     currentPage: response.number,
  //     data: response.content
  //   });
  // };

  render() {
    return (
      <div>
        <h1>List Model</h1>
      </div>
    );
  }
}

export default ListModelPage;
