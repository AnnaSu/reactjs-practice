'use strict';
var SlideItem = require('./SlideItem.jsx');
var action = require('../actions/AppActionCreator.js');
var Slides = React.createClass({
	render: function() {
		var _index;
		let _slideItems = this.props.data.map((item, index) => {
					if(item.show){
						_index = index;
					}
					return (
						<SlideItem show={item.show} data={item} key={item.uid}>
						</SlideItem>
					); 
				});
		return (
			<div className="row">
				<div className="imageSlider">
					<a className="sliderControl left" onClick={this._clickHandler.bind(this, _index-1)}><span className="glyphicon glyphicon-chevron-left"></span></a>
					<div className="sliderItems">
						{_slideItems}
					</div>
					<a className="sliderControl right" onClick={this._clickHandler.bind(this, _index+1)}><span className="glyphicon glyphicon-chevron-right"></span></a>
				</div>
			</div>
		);
	},	
	_clickHandler: function(index, event){
		event.preventDefault();
		console.log(event);
		action.sliderNext(index);
	}
});

module.exports = Slides;