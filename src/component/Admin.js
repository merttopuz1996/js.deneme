import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class Admin extends Component {
  
    render(){ 
    const {isim,sifre}=this.props;
        return (
            <div>
                <ul>
        <li>isim:{isim}<i className="fas fa-trash-alt"></i></li>
        <li>sifre:{sifre}</li>
                </ul>
                
            </div>
        )
    }
}
Admin.propTypes= {
isim:PropTypes.string.isRequired,
sifre:PropTypes.string.isRequired
}
Admin.defaultProps={
    isim:"gir",
    sifre:"girmedin"

}
export default Admin;