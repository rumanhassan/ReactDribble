
var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');
var jqueryUi = require('jquery-ui');


var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<RouteHandler/>
			</div>
		);

	}
});

module.exports = App;