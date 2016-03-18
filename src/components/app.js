var React = require('react');
var Router = require('react-router');

var RouteHandler = Router.RouteHandler;

var AppViewController = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Welcome To React</h3>
        <RouteHandler/>
      </div>
    )
  }
})


module.exports = AppViewController;