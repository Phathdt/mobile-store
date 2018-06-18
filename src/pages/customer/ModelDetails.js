import React, { Component } from 'react'
import Api from 'Api'

import UserPageHeader from './UserPageHeader.js'
import UserPageFooter from './UserPageFooter.js'
import SideMenu from './SideMenu'

import "../../styles/customs/model_details.css"


class ModelDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          token: this.props.token,
          id: '',
          name: '',
          color: '',
          modelID: '',
          pricesold: '',
          images: '',
          storage: '',
          modelOptions: [],
          isLoaded: false
        }
      }
    
      async componentWillMount() {
        let response = await this.getVariant(this.props.match.params.id)
        await this.setState({
          id: response.variantId,
          name: response.name,
          color: response.color,
          storage: response.storage,
          modelID: response.modelID,
          pricesold: response.pricesold,
          images: response.images.map(image => image.imageURL)
        })
    
        let responseModels = await this.getAllModel()
        await this.setState({
          modelOptions: responseModels.content,
          isLoaded: true
        })
      }
    
      getVariant = async id => {
        let { token } = this.state
        let res = await Api.getVariant(token, id)
    
        if (res.status === 401) {
          alert('something went wrong')
        } else {
          let resJson = await res.json()
          return resJson.data
        }
      }
    
      getAllModel = async () => {
        try {
          let { token } = this.state
          let res = await Api.getListModel(token, 0, 100)
    
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
  render() {
    return (
      <div>
        <UserPageHeader/>
        <div className="centerContent">
            <div className="row">
                <div className="col-lg-3">
                    <SideMenu/>
                </div>
                <div className="col-lg-9">
                    <div className="row product-details">
                        <div className="col-lg-5">
                            <div id="panel_img" className="view-product">
                                <img src={this.state.images} />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="product-information">
                                <h2>{this.state.name}</h2>
                                <p>Product ID: {this.state.id}</p>
                                <p>Model ID: {this.state.modelID}</p>
                                <h4>{this.state.pricesold} đ</h4>
                                <div style={{'margin-bottom':'15px'}}>
                                    <a href="/Cart/Index" className="btn btn-default add-to-cart">
                                        Thêm vào giỏ
                                    </a>
                                </div>
                                <p><b>Tình trạng tồn kho:</b> Còn Hàng</p>
                                <p><b>Trạng thái sản phẩm:</b> Mới</p>
                                <p><b>Màu sắc:</b> {this.state.color}</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab">
                        <button className="tablinks" onclick="showContent('descript')">Mô tả</button>
                        <button className="tablinks" onclick="showContent('details')">Thông số</button>
                        <button className="tablinks" onclick="showContent('reviews')">Đánh giá(5)</button>
                    </div>
                        <div id="descript" className="tabcontent">
                        <h3>{this.state.name}</h3>
                        <p>Siêu phẩm smartphone hàng đầu trong thế giới Android đã ra mắt với màn hình vô cực, camera chuyên nghiệp như máy ảnh và hàng loạt những tính năng cao cấp đầy hấp dẫn.
Thiết kế hoàn thiện hơn
Không có một sự lột xác về thiết kế, Samsung Galaxy S9 Plus năm nay chỉ cải tiến một vài điểm thiết kế đã quá hoàn hảo từ thế hệ Galaxy S8 trước đây. Vẫn là khung kim loại kết hợp 2 mặt kính cường lực được bo cong các cạnh đầy "quyến rũ" và hiện đại.</p>
                        </div>

                </div>
            </div>
            <UserPageFooter/>
        </div>
      </div>
      
    )
  }
}

export default ModelDetails
