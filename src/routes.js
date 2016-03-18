var React = require('react');

var Router = require('react-router');

var RouteHandler = Router.RouteHandler;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var AppViewController = require('./components/app.js');
var HomeView          = require('./components/component-home-page.jsx');
var NotFoundView      = require('./components/component-not-found.jsx');
var AboutView         = require('./components/about/component-about-page.jsx');
var AuthorsIndexView  = require('./components/authors/components-authors-index.jsx')

var appRoutes = (
    <Route name="app" path="/" handler={AppViewController} >
      <DefaultRoute handler={HomeView} />
      <Route name="about" path="/about" handler={AboutView} />
      <Route name="author" path="/authors" handler={AuthorsIndexView} />
      <Redirect from="about-us" to="about"/>
      <NotFoundRoute handler={NotFoundView} />
    </Route>
  );

module.exports = appRoutes;