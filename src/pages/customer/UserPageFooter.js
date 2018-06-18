import React, { Component } from 'react'
import '../../styles/customs/customer.css'

const horizontalJustifyContent = {
    display: 'flex',
    justifyContent: 'space-between'
}

class UserPageFooter extends Component {
    render() {
        return (
            <div>
                <div style={horizontalJustifyContent} className="footerLink">
                    <div>
                        <ul>
                            <li>
                                <a
                                    href="/tra-gop"
                                    title="Hướng dẫn mua trả góp"
                                >
                                    Tìm hiểu về mua trả góp
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/bao-hanh"
                                    title="Tìm trung tâm bảo hành"
                                >
                                    Chính sách bảo hành
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/chinh-sach-bao-hanh-san-pham"
                                    title="Chính sách đổi trả"
                                >
                                    Chính sách đổi trả
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/giao-hang"
                                    title="Giao hàng & Thanh toán"
                                >
                                    Giao hàng & Thanh toán
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a
                                    href="http://mwg.vn"
                                    title="Giới thiệu công ty (mwg.vn)"
                                >
                                    Giới thiệu công ty <span>(mwg.vn)</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="//vieclam.thegioididong.com"
                                    title="Tuyển dụng"
                                >
                                    Tuyển dụng
                                </a>
                            </li>
                            <li>
                                <a href="/lien-he" title="Gửi góp ý, khiếu nại">
                                    Gửi góp ý, khiếu nại
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="/tos" title="Quy chế hoạt động">
                                    Quy chế hoạt động
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/noi-quy-cua-hang"
                                    title="Nội quy cửa hàng"
                                >
                                    Nội quy cửa hàng
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/chat-luong-phuc-vu"
                                    title="Chất lượng phục vụ"
                                >
                                    Chất lượng phục vụ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/trao-thuong"
                                    title="Thông tin trao thưởng"
                                >
                                    Thông tin trao thưởng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <p>
                                    Gọi mua hàng{' '}
                                    <a href="tel:18001060">1800.1060</a> (7:30 -
                                    22:00)
                                </p>
                                <p>
                                    Gọi khiếu nại{' '}
                                    <a href="tel:18001062">1800.1062</a> (8:00 -
                                    21:30)
                                </p>
                                <p>
                                    Gọi bảo hành{' '}
                                    <a href="tel:18001064">1800.1064</a> (8:00 -
                                    21:00)
                                </p>
                                <p>
                                    Hỗ trợ kỹ thuật{' '}
                                    <a href="tel:18001763">1800.1763</a> (7:30 -
                                    22:00)
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPageFooter
