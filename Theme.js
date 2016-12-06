import React, { Component } from 'react';
import React-Dom from 'react-dom';
import Jumbotron from './Jumbotron.js'
import NavBar from './NavBar.js'
import Page from './Page.js'

const Theme = React.createClass({ 

    handleChange(page){
        this.setState({currentPage: page});
    },

    getInitialState(){
        return {
            currentPage: 'contact'
        };
    },

    getDefaultProps() {
        return {
            brand: 'ReactStrap',
            heading: 'Hello, world!',
            text: "This is a bootstrap theme for React.js"
        }
    },

    render() { 

    var jumbotron;

    if(this.state.currentPage == 'home'){
        jumbotron = <Jumbotron heading={this.props.heading} text={this.props.text}/>;
    } else {
        jumbotron = '';
    }
     return (
        <div>
            <NavBar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
            {jumbotron}
            <Page currentPage={this.state.currentPage}/>
        </div>
    ); 
    } 
    }); 


ReactDOM.render(
    <div>
        <Theme />
    </div>, document.getElementById('root'));


