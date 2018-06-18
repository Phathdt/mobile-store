import React, { Component } from 'react'
import Api from 'Api'

import UserPageFooter from './UserPageFooter.js'
import SideMenu from './SideMenu'
import '../../styles/customs/customer.css'
import swal from 'sweetalert2'

class UserPageBody extends Component {
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
    let response = await this.getListVariant(0)
    this.setState({
      data: response.content != undefined ? response.content : null,
      currentPage: response.number,
      totalPages: response.totalPages,
      totalElements: response.totalElements
    })
  }

  getListVariant = async page => {
    try {
      let { token } = this.state
      let res = await Api.getListVariant(token, page)

      if (res.status === 401) {
        alert('something went wrong')
      } else {
        let resJson = await res.json()
        return resJson.data
      }
    } catch (error) {
      console.log(error)
    }
  }

  onPageChange = async page => {
    let response = await this.getListVariant(page - 1)
    this.setState({
      currentPage: response.number,
      data: response.content
    })
  }

  addToCart = async variantId => {
    if (this.state.token == undefined) {
      swal('Cancelled', 'Your need to sign in', 'error')
    } else {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]')

      let variant = cart.find(t => t.variantID == variantId)

      if (variant) {
        variant.countNumber += 1
        variant.total =
          parseInt(variant.countNumber) * parseInt(variant.priceEachUnit)
      } else {
        let item = this.state.data.find(t => t.variantId == variantId)
        cart.push({
          countNumber: 1,
          priceEachUnit: item.pricesold,
          variantID: item.variantId,
          src: item.images[0].imageURL,
          total: item.pricesold
        })
      }
      await localStorage.setItem('cart', JSON.stringify(cart))
    }
  }

  render() {
    return (
      <div className="centerContent">
        <div className="row" style={{ marginBottom: '10px' }}>
          <div className="col-lg-8">
            <div className="mainPR">
              <img src={require('../../styles/images/slider1.png')} />
            </div>
          </div>
          <div className="col-lg-4 vJustifySpace">
            <img src={require('../../styles/images/pr1.png')} />
            <img src={require('../../styles/images/pr2.png')} />
            <img src={require('../../styles/images/pr3.png')} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" style={{ marginBottom: '15px' }}>
            <img
              src={require('../../styles/images/promotion.png')}
              style={{ maxWidth: '1100px' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <SideMenu />
          </div>
          <div className="col-lg-9">
            <div className="row">
              {this.state.data.map((i, idx) => (
                <div className="col-lg-4" key={idx}>
                  <div className="product-image-wrapper">
                    <div className="productinfo">
                      <img src={i.images[0].imageURL} />
                      <p>{i.name}</p>
                    </div>
                    <div className="product-overlay">
                      <div className="overlay-content">
                        <a href={`/variant/details/${i.variantId}`}>
                          <h2>Giá: {i.pricesold}</h2>
                          <p>{i.name}</p>
                        </a>
                        <a
                          onClick={() => {
                            this.addToCart(i.variantId)
                          }}
                          className="btn btn-default add-to-cart"
                        >
                          Thêm vào giỏ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <UserPageFooter />
      </div>
    )
  }
}
export default UserPageBody
