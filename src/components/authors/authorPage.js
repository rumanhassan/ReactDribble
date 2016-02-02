"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var AuthorList = require('./authorList');
var Slider = require('./slider');

var AuthorPage = React.createClass({
	getInitialState: function() {
		return {
			authors: AuthorStore.getAllAuthors(),
			Value: 50,
			Value1: 100
		};
	},

	componentWillMount: function() {
		AuthorStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		AuthorStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ authors: AuthorStore.getAllAuthors() });
	},

	sliderUpdated: function(values){
		this.setState({
			Value: this.refs.slider1.props.sliderValue,
			Value1: this.refs.slider2.props.sliderValue
		});
	},

	render: function() {
		return (
			<div>
				<h1>Authors</h1>
				<Slider ref="slider1" sliderValue={this.state.Value} updateSlider={this.sliderUpdated} />
				{this.state.Value}
				<br />
				<Link to="addAuthor" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} />
				<Slider ref="slider2" sliderValue={this.state.Value1} updateSlider={this.sliderUpdated} />
				{this.state.Value1}
			</div>
		);
	}
});

module.exports = AuthorPage;