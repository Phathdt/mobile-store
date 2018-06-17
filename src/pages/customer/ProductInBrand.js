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
          name: '',
        }
      }
    
      async componentWillMount() {
        console.log(this.props.match.params.name)
        await this.setState({
          name: this.props.match.params.name,
          
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
              <h2 className="brand-title">{this.state.name}</h2>
            </div>
          </div>
          <UserPageFooter/>
        </div>
    </div>
    )
  }
}

export default ProductInBrand
