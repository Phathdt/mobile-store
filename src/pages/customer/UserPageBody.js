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
    'justify-content': 'space-between'
}

class UserPageBody extends Component{

    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div style={centerContent}>
                <div className="row">
                    <div className="col-lg-9" style={{'margin-bottom':'20px'}}>
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
                        <div class="cr-widget bg-primary card text-white">
                            <div class="cr-widget__icon card-body">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Primary</h5>
                                <h6 class="card-subtitle">widget subtitle</h6>
                            </div>
                        </div>
                        <div class="cr-widget bg-primary card text-white">
                            <div class="cr-widget__icon card-body">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Primary</h5>
                                <h6 class="card-subtitle">widget subtitle</h6>
                            </div>
                        </div>
                        <div class="cr-widget bg-primary card text-white">
                            <div class="cr-widget__icon card-body">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Primary</h5>
                                <h6 class="card-subtitle">widget subtitle</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <img src={require("../../styles/images/promotion.png")} style={{'max-width': '1100px'}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3" >
                        <div className="list-brand">Samsung</div>
                        <div className="list-brand">Oppo</div>
                        <div className="list-brand">Apple</div>
                        <div className="list-brand">Q-mobile</div>
                        <div className="list-brand">S-mobile</div>
                        <div className="list-brand">Windows Phone</div>
                        
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