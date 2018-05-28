import React, { Component } from 'react'

import UserPageHeader from './UserPageHeader.js'
import UserPageFooter from './UserPageFooter.js'
import SideMenu from './SideMenu'
import { Button } from 'reactstrap';

import "../../styles/customs/model_details.css"


class ModelDetails extends Component {
    
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
                                <img src={require("../../styles/images/phone_sample.png")} />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="product-information">
                                <h2>Oppo S2564235</h2>
                                <p>Model ID: 1089772</p>
                                <div><img src="~/Content/images/product-details/rating.png" alt="" /></div>
                                <h4>2.000.000đ</h4>
                                <div style={{'margin-bottom':'15px'}}>
                                    <a href="/Cart/Index" className="btn btn-default add-to-cart">
                                        Thêm vào giỏ
                                    </a>
                                </div>
                                <p><b>Tình trạng tồn kho:</b>Còn Hàng</p>
                                <p><b>Trạng thái sản phẩm:</b> Mới</p>
                                <p>Nha san xuat</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab">
                        <button className="tablinks" onclick="showContent('descript')">Mô tả</button>
                        <button className="tablinks" onclick="showContent('details')">Thông số</button>
                        <button className="tablinks" onclick="showContent('reviews')">Đánh giá(5)</button>
                    </div>

                        <div id="descript" className="tabcontent">
                        <h3>Oppo S626</h3>
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
