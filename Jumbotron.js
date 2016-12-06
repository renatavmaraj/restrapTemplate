import React from 'react';


const Jumbotron = React.createClass({ 
	render() { 
		return (
				<div className="jumbotron">
				    <div className="container">
				        <h1>{this.props.heading}</h1>
				        <p className="lead">{this.props.text}</p>
				        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
				    </div>
				</div>
			); 
	}
}); 

export default Jumbotron;
