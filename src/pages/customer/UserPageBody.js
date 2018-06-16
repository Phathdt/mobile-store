import React, { Component } from 'react';
import Slider from "react-slick";

import Api from 'Api'

import UserPageFooter from './UserPageFooter.js'
import SideMenu from './SideMenu'
import CartPage from './CartPage.js';
import '../../styles/customs/customer.css'




class UserPageBody extends Component{  
    render(){
        var settings = {
            autoPlay: true,
            infinite: true,
            autoplaySpeed: 1000,
            speed: 500,
        };

        return (
            <div className="centerContent">
                <div className="row">
                    <div className="col-lg-9">
                        <Slider {...settings}>
                            <div>
                                <img src={require("../../styles/images/slider1.png")}/>
                            </div>
                            <div>
                                <img src={require("../../styles/images/slider2.png")}/>
                            </div>
                            <div>
                                <img src={require("../../styles/images/slider3.png")}/>
                            </div>
                            <div>
                                <img src={require("../../styles/images/slider4.png")}/>
                            </div>
                        </Slider>
                    </div>
                    <div className="col-lg-3 vJustifySpace">
                        <div className="cr-widget  card text-white">
                            <div className="card-body">
                                <div className="card-title">Đảm bảo uy tín</div>
                                <div className="card-subtitle">Đổi trả miễn phí nếu sản phẩm lỗi</div>
                            </div>
                        </div>
                        <div className="cr-widget  card text-white">
                            <div className="card-body header-widget">
                                <div className="card-title">Trả góp 0%</div>
                                <div className="card-subtitle">Áp dụng cho sản phẩm Oppo</div>
                            </div>
                        </div>
                        <div className="cr-widget  card text-white">
                            <div className="card-body header-widget">
                                <div className="card-title">Bảo hành 2 năm</div>
                                <div className="card-subtitle">Cho tất cả các sản phẩm điện thoại của Apple</div>
                            </div>
                        </div>
                        <div className="cr-widget  card text-white">
                            <div className="card-body header-widget">
                                <div className="card-title">Giao hàng miễn phí</div>
                                <div className="card-subtitle">Cho các đơn hàng trên 5 triệu đồng</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12" style={{'margin-bottom':'15px'}}>
                        <img src={require("../../styles/images/promotion.png")} style={{'max-width': '1100px'}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3" >
                        <SideMenu/> 
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="product-image-wrapper">
                                    <div class="productinfo">
                                        <img src={require("../../styles/images/phone_sample.png")} />
                                        <p>Oppo S26255 Test</p>
                                    </div>
                                    <div class="product-overlay">
                                            <div class="overlay-content">
                                                <a href="/model/details/1">
                                                    <h2>Giá: 4.500.000đ</h2>
                                                    <p>Oppo S3564 D2</p>
                                                </a>
                                                <a href="/cart" class="btn btn-default add-to-cart">
                                                    Thêm vào giỏ
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product-image-wrapper">
                                    <div class="productinfo">
                                        <img src={require("../../styles/images/phone_sample.png")} />
                                        <p>Oppo S26255</p>
                                    </div>
                                    <div class="product-overlay">
                                            <div class="overlay-content">
                                                <h2>Giá: 4.500.000đ</h2>
                                                <p>Oppo S3564 D2</p>
                                                <a href="/Cart" class="btn btn-default add-to-cart">
                                                    Thêm vào giỏ
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product-image-wrapper">
                                    <div class="productinfo">
                                        <img src={require("../../styles/images/phone_sample.png")} />
                                        <p>Oppo S26255</p>
                                    </div>
                                    <div class="product-overlay">
                                            <div class="overlay-content">
                                                <h2>Giá: 4.500.000đ</h2>
                                                <p>Oppo S3564 D2</p>
                                                <a href="/Cart" class="btn btn-default add-to-cart">
                                                    Thêm vào giỏ
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="product-image-wrapper">
                                    <div class="productinfo">
                                        <img src={require("../../styles/images/phone_sample.png")} />
                                        <p>Oppo S26255</p>
                                    </div>
                                    <div class="product-overlay">
                                            <div class="overlay-content">
                                                <h2>Giá: 4.500.000đ</h2>
                                                <p>Oppo S3564 D2</p>
                                                <a href="/Cart" class="btn btn-default add-to-cart">
                                                    Thêm vào giỏ
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product-image-wrapper">
                                    <div class="productinfo">
                                        <img src={require("../../styles/images/phone_sample.png")} />
                                        <p>Oppo S26255</p>
                                    </div>
                                    <div class="product-overlay">
                                            <div class="overlay-content">
                                                <h2>Giá: 4.500.000đ</h2>
                                                <p>Oppo S3564 D2</p>
                                                <a href="/Cart" class="btn btn-default add-to-cart">
                                                    Thêm vào giỏ
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product-image-wrapper">
                                    <div class="productinfo">
                                        <img src={require("../../styles/images/phone_sample.png")} />
                                        <p>Oppo S26255</p>
                                    </div>
                                    <div class="product-overlay">
                                            <div class="overlay-content">
                                                <h2>Giá: 4.500.000đ</h2>
                                                <p>Oppo S3564 D2</p>
                                                <a href="/Cart" class="btn btn-default add-to-cart">
                                                    Thêm vào giỏ
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="product-image-wrapper">
                                    <div class="productinfo">
                                        <img src={require("../../styles/images/phone_sample.png")} />
                                        <p>Oppo S26255</p>
                                    </div>
                                    <div class="product-overlay">
                                            <div class="overlay-content">
                                                <h2>Giá: 4.500.000đ</h2>
                                                <p>Oppo S3564 D2</p>
                                                <a href="/Cart" class="btn btn-default add-to-cart">
                                                    Thêm vào giỏ
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product-image-wrapper">
                                    <div class="productinfo">
                                        <img src={require("../../styles/images/phone_sample.png")} />
                                        <p>Oppo S26255</p>
                                    </div>
                                    <div class="product-overlay">
                                            <div class="overlay-content">
                                                <h2>Giá: 4.500.000đ</h2>
                                                <p>Oppo S3564 D2</p>
                                                <a href="/Cart" class="btn btn-default add-to-cart">
                                                    Thêm vào giỏ
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product-image-wrapper">
                                    <div class="productinfo">
                                        <img src={require("../../styles/images/phone_sample.png")} />
                                        <p>Oppo S26255</p>
                                    </div>
                                    <div class="product-overlay">
                                            <div class="overlay-content">
                                                <h2>Giá: 4.500.000đ</h2>
                                                <p>Oppo S3564 D2</p>
                                                <a href="/Cart" class="btn btn-default add-to-cart">
                                                    Thêm vào giỏ
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <UserPageFooter/>
            </div>
        )

    }
}
export default UserPageBody