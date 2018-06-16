import React, { Component } from 'react'

import "../../styles/customs/customer.css"

class SideMenu extends Component {
  render() {
    return (
      <div>
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
                <div className="list-item">Iphone 6S</div>
                <div className="list-item">Oppo M454</div>
                <div className="list-item">Zen phone 5</div>
                <div className="list-item">Q-mobile B2663</div>
                <div className="list-item">S-mobile C2333</div>
            </div>
      </div>
    )
  }
}

export default SideMenu
