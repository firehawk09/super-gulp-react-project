var React = require('react');
var Router = require('react-router');

var HistoryLocation = Router.HistoryLocation;

var appRoutes = require('./routes');

Parse.initialize("h47rRbYRHC3RZwkzwCjbqyKOC32nhw9vMEB1SJFc", "AURKBzMOQ9UueZc7cYAEey35usc7SFqZiTqO991F");

Router.run(appRoutes, HistoryLocation, function(Handler) {
	React.render(<Handler/>, document.querySelector('.react-container'))
})