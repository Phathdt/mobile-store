import React, { Component } from 'react';
import SearchInput from 'components/SearchInput'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const headerStyle={
    'padding-top': '10px',
    'padding-bottom': '10px',
    'background-color': '#fcff28',
}

class UserPageHeader extends Component{
    render(){
        return(
            <div>
                <div className="row" style={headerStyle}>
                    <div className="col-lg-3">
                        <img src={require('../../styles/images/logo.png')} style={{'max-height': '38px'}}/>
                    </div>
                    <div className="col-lg-6">
                        <SearchInput size="40"/>
                    </div>
                    <div className="col-lg-3">
                        <Link to="/signin">Signin </Link>
                            /
                        <Link to="/signup"> Sign up</Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default UserPageHeader
