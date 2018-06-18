import React, { Component } from 'react'
import Api from 'Api'

import UserPageHeader from './UserPageHeader'
import UserPageFooter from './UserPageFooter.js'
import SideMenu from './SideMenu'
import swal from 'sweetalert2'

import '../../styles/customs/customer.css'
const brands = ['samsung', 'oppo', 'apple', 'nokia', 'xiaomi']
class ProductInBrand extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      id: '',
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
      data: []
    }
  }

  async componentWillMount() {
    if (brands.indexOf(this.props.match.params.brandName) !== -1) {
      var brandID = 0
      switch (this.props.match.params.brandName) {
        case 'samsung':
          brandID = 60
          break
        case 'oppo':
          brandID = 61
          break
        case 'apple':
          brandID = 63
          break
        case 'nokia':
          brandID = 64
          break
      }
      let response = await this.getVariantByBrand(brandID)
      var brandData = []
      response.map(i => (brandData = brandData.concat(i.content)))

      await this.setState({
        id: this.props.match.params.brandName,
        data: brandData
      })
    } else {
      let response = await this.getVariantByModel(
        this.props.match.params.modelID
      )
      await this.setState({
        id: this.props.match.params.modelID,
        data: response.content,
        currentPage: response.number,
        totalPages: response.totalPages,
        totalElements: response.totalElements
      })
    }
  }
  getVariantByModel = async id => {
    try {
      let { token } = this.state
      let res = await Api.getVariantByModel(token, id)

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

  getVariantByBrand = async id => {
    var brandData = []
    try {
      let { token } = this.state
      let res = await Api.getVariantByBrand(token, id)
      if (res.status === 401) {
        alert('something went wrong')
      } else {
        let resJson = await res.json()

        var results = await Promise.all(
          resJson.data.content.map(async i => {
            let a = await this.getVariantByModel(i.modelID)
            if (res.status === 401) {
              alert('something went wrong')
            } else {
              brandData = brandData.concat(a)
            }
          })
        )
        return brandData
      }
    } catch (error) {
      console.log(error)
    }
  }

  onPageChange = async page => {
    let response = await this.getVariantByModel(page - 1)
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
      <div>
        <UserPageHeader />
        <div className="centerContent">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu />
            </div>
            <div className="col-lg-9">
              <h2 className="brand-title">
                All products > Model: {this.state.id}
              </h2>
              <div className="row">
                {this.state.data.map((i, idx) => (
                  <div key={idx} className="col-lg-4">
                    <div className="product-image-wrapper">
                      <div className="productinfo">
                        <img src={i.images[0].imageURL} />
                        <h5>{i.name}</h5>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <a href={`/variant/details/${i.variantId}`}>
                            <h3>{i.name}</h3>
                            <p>Giá: {i.pricesold} đ</p>
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
      </div>
    )
  }
}

export default ProductInBrand
