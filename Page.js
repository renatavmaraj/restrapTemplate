import React from 'react';

const Page = React.createClass({ 
        
    render() { 

        var pageContent;

        if(this.props.currentPage == 'home'){
            pageContent = 'This is the home page';
        } else if (this.props.currentPage == 'about'){
            pageContent = 'This is the about page';
        } else if (this.props.currentPage == 'contact') {
            pageContent = 'This is the contact page';
        } else {
            pageContent = 'This is the home page';
        }
        return (
            <div>
                <div className="container">
                    <h2>{this.props.currentPage.charAt(0).toUpperCase() + this.props.currentPage.slice(1)}</h2>
                    {pageContent}
                </div>
            </div>
        ); 
    }

}); 

export default Page;
