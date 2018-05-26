import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import UserPageFooter from './UserPageFooter.js'
import '../../styles/customs/customer.css'

const centerContent={
    'max-width': '1100px',
    'margin': 'auto',
}
const verticalJustifyContent={
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'padding-left': '0'
}

class UserPageBody extends Component{

    render(){
        var settings = {
            autoPlay: true,
            infinite: true,
            autoplaySpeed: 1000,
            speed: 500,
        };

        return (
            <div style={centerContent}>
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
                    <div className="col-lg-3" style={verticalJustifyContent}>
                        <div className="cr-widget bg-primary card text-white">
                            <div className="cr-widget__icon card-body ">
                            </div>
                            <div className="card-body header-widget">
                                <h5 className="card-title">Primary</h5>
                                <h6 className="card-subtitle">widget subtitle</h6>
                            </div>
                        </div>
                        <div className="cr-widget bg-primary card text-white">
                            <div className="cr-widget__icon card-body ">
                            </div>
                            <div className="card-body header-widget">
                                <h5 className="card-title">Primary</h5>
                                <h6 className="card-subtitle">widget subtitle</h6>
                            </div>
                        </div>
                        <div className="cr-widget bg-primary card text-white">
                            <div className="cr-widget__icon card-body ">
                            </div>
                            <div className="card-body header-widget">
                                <h5 className="card-title">Primary</h5>
                                <h6 className="card-subtitle">widget subtitle</h6>
                            </div>
                        </div>
                        <div className="cr-widget bg-primary card text-white">
                            <div className="cr-widget__icon card-body ">
                            </div>
                            <div className="card-body header-widget">
                                <h5 className="card-title">Primary</h5>
                                <h6 className="card-subtitle">widget subtitle</h6>
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
                        <div className="title">Brands</div>
                        <div className="list-menu">
                            <div className="list-item">Samsung</div>
                            <div className="list-item">Oppo</div>
                            <div className="list-item">Apple</div>
                            <div className="list-item">Q-mobile</div>
                            <div className="list-item">S-mobile</div>
                            <div className="list-item">Windows Phone</div>
                        </div>
                        <div className="title">New Models</div>
                        <div className="list-menu">
                            <div className="list-item">Samsung</div>
                            <div className="list-item">Oppo</div>
                            <div className="list-item">Apple</div>
                            <div className="list-item">Q-mobile</div>
                            <div className="list-item">S-mobile</div>
                            <div className="list-item">Windows Phone</div>
                        </div>
                    </div>
                    <div className="col-lg-9">
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
                                                <a href="/Cart/Index" class="btn btn-default add-to-cart">
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
                                                <a href="/Cart/Index" class="btn btn-default add-to-cart">
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
                                                <a href="/Cart/Index" class="btn btn-default add-to-cart">
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
                                                <a href="/Cart/Index" class="btn btn-default add-to-cart">
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
                                                <a href="/Cart/Index" class="btn btn-default add-to-cart">
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
                                                <a href="/Cart/Index" class="btn btn-default add-to-cart">
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
                                                <a href="/Cart/Index" class="btn btn-default add-to-cart">
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
                                                <a href="/Cart/Index" class="btn btn-default add-to-cart">
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
                                                <a href="/Cart/Index" class="btn btn-default add-to-cart">
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