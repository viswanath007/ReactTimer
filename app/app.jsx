var React        = require('react'),
    ReactDOM     = require('react-dom');
// var Route        = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main         = require('Main');
var Timer         = require('Timer');
var Countdown     = require('Countdown');
var About         = require('About');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Load custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Route path="countdown" component={Countdown}/>
          <Route path="about" component={About}/>
          <IndexRoute component={Timer}/>
        </Route>
      </Router>,
      document.getElementById('app')
    );