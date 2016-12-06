import React from 'react';

const NavBar = React.createClass({

    change(page){
        this.props.change(page);
    },


    render() { 
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{this.props.brand}</a>
                    </div>
                    <div id="navbar">
                        <ul className="nav navbar-nav">
                            <li className={(this.props.currentPage === 'home') ? 'active': ''}><a href="#" onClick={this.change.bind(this,'home')}>Home</a></li>
                            <li className={(this.props.currentPage === 'about') ? 'active': ''}><a href="#" onClick={this.change.bind(this,'about')} >About</a></li>
                            <li className={(this.props.currentPage === 'contact') ? 'active': ''}><a href="#" onClick={this.change.bind(this,'contact')}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        ); 
    } 

}); 

export default NavBar;
