import React, { Component } from 'react'
import Api from 'Api'
import { Link } from 'react-router-dom'

import "../../styles/customs/customer.css"

class SideMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
      data: []
    }
  }

  async componentWillMount() {
    let response = await this.getListModel(0);
    this.setState({
      data: response.content,
      currentPage: response.number,
      totalPages: response.totalPages,
      totalElements: response.totalElements
    });
  }

  getListModel = async page => {
    try {
      let { token } = this.state;
      let res = await Api.getListModel(token, page);

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
    let response = await this.getListModel(page - 1);
    this.setState({
      currentPage: response.number,
      data: response.content
    });
  };
  render() {
    return (
      <div>
        <div className="title">Brands</div>
            <div className="list-menu">
                <a href="/listproducts/samsung"><div className="list-item">Samsung</div></a>
                <a href="/listproducts/oppo"><div className="list-item">Oppo</div></a>
                <a href="/listproducts/apple"><div className="list-item">Apple</div></a>
                <a href="/listproducts/qmobile"><div className="list-item">Q-Mobile</div></a>
                <a href="/listproducts/nokia"><div className="list-item">Nokia</div></a>
                <a href="/listproducts/xiaomi"><div className="list-item">Xiaomi</div></a>
            </div>
            <div className="title">New Models</div>
            <div className="list-menu">
            {this.state.data.slice(0,10).map(i=>(
              <div className="list-item">{i.name}</div>
            ))}
            </div>
      </div>
    )
  }
}

export default SideMenu
