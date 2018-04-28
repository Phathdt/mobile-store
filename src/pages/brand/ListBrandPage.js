import React, { Component } from 'react';
import ListBrand from '../../components/brand/ListBrand';
import { HOST } from '../../Constants';
import swal from 'sweetalert2';

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
      let res = await fetch(`${HOST}/brand/list/10/${page}`, {
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

  deleteBrand = param => e => {
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this brand!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(result => {
      if (result.value) {
        swal('Deleted!', 'Your brand has been deleted.', 'success');
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal('Cancelled', 'Your brand is safe :)', 'error');
      }
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
            deleteBrand={this.deleteBrand}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ListBrandPage;
