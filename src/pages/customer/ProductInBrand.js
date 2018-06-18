import React, { Component } from 'react'
import Api from 'Api'

import UserPageHeader from './UserPageHeader'
import UserPageFooter from './UserPageFooter.js'
import SideMenu from './SideMenu'
import { Button } from 'reactstrap';

import '../../styles/customs/customer.css'




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
        let response = await this.getVariantByModel(this.props.match.params.modelID)
        await this.setState({
          id: this.props.match.params.modelID,
          data: response.content!=undefined?response.content:null,
          currentPage: response.number,
          totalPages: response.totalPages,
          totalElements: response.totalElements
        })
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
    
      onPageChange = async page => {
        let response = await this.getVariantByModel(page - 1)
        this.setState({
          currentPage: response.number,
          data: response.content!=undefined?response.content:null
        })
      }
    
     
  render() {
    return (
      <div>
        <UserPageHeader/>
        <div className="centerContent">
          <div className="row">
            <div className="col-lg-3" >
                <SideMenu/> 
            </div>
            <div className="col-lg-9">
              <h2 className="brand-title">All products  >  ModelID: {this.state.id}</h2>
              <div className="row">
                            {this.state.data.map(i=>(
                                <div className="col-lg-4">
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
                                                <a href="/cart" class="btn btn-default add-to-cart">
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
          <UserPageFooter/>
        </div>
    </div>
    )
  }
}

export default ProductInBrand
