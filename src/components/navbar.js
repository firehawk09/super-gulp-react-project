"use strict";

var React = require('react');

var NavView = React.createClass({
    render: function() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-header-full" role="navigation" id="header">
                    <div className="container">
                    { /*Brand and toggle get grouped for better mobile display */}
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                          <span className="sr-only">Toggle navigation</span>
                          <i className="fa fa-bars"></i>
                        </button>
                        <a id="ar-brand" className="navbar-brand hidden-lg hidden-md hidden-sm" href="#"></a>
                      </div>
                      { /*!-- navbar-header --> */}
                      
                      <div className="pull-right">
                      </div>
                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                          <li>
                            <a href="/">Home</a>
                          </li>
                            <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/services">Services</a>
                          </li>
                        
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </div>
                    {/*!-- navbar-collapse -->*/}
                  </div>
                  {/*!-- container -->*/}
                </nav>
            </div>
            )
    }
})

module.exports = NavView