"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Slider = React.createClass({

	componentDidMount: function() {
		this.initilizeSlider(this.props.sliderValue);
	},

	initilizeSlider: function(values){
		var self = this;
		$(this.refs.slide.getDOMNode()).slider({
			range: "min",
			value: values,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				self.props.sliderValue = ui.value;
				self.props.updateSlider();
				//$( "#amount" ).html( "$" + ui.value );
			}
    });
	},
	render: function(){			
	return (
			<div>
				<div ref="slide"></div>
			</div>	
		);
	}
});

module.exports = Slider;