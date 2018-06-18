import React, { Component } from 'react';
import SearchInput from 'components/SearchInput'
import '../../styles/customs/customer.css'


class UserPageHeader extends Component{
    render(){
        return(
            <div>
                <div className="row headerStyle">
                    <div className="col-lg-3" align="right">
                        <a href="/"><img src={require('../../styles/images/logo.png')} style={{'maxHeight': '38px'}} /></a>
                    </div>
                    <div className="col-lg-6">
                        <SearchInput size="40"/>
                    </div>
                    <div className="col-lg-3 vJustifyCenter">
                        <div className="linkSign">
                            <a href="/signin">Signin </a>
                                /
                            <a href="/signup"> Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default UserPageHeader
