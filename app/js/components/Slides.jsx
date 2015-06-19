'use strict';
var Swipe = require('swipejs');
var SlideItem = require('./SlideItem.jsx');
var action = require('../actions/AppActionCreator.js');
var Slides = React.createClass({
	componentDidMount: function () {
      if (this.isMounted()) {
        this.swipe = Swipe(React.findDOMNode(this), this.props);
      }
    },

    componentDidUpdate: function () {
      if (this.props.slideToIndex || this.props.slideToIndex === 0) {
        this.swipe.slide(this.props.slideToIndex);
      }
    },

    componentWillUnmount: function () {
      this.swipe.kill();
      delete this.swipe;
    },

    shouldComponentUpdate: function (nextProps) {
      return (
        (this.props.slideToIndex !== nextProps.slideToIndex) ||
        (typeof this.props.shouldUpdate !== 'undefined') && this.props.shouldUpdate(nextProps)
      );
    },
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
			<div className="swipe">
				<div className="swipe-wrap">
					{_slideItems}
				</div>
				<span className="slider-control left" onClick={this._prev}>
					<i className="glyphicon glyphicon-chevron-left"></i>
				</span>
				<span className="slider-control right" onClick={this._prev}>
					<i className="glyphicon glyphicon-chevron-right"></i>
				</span>
			</div>
		);
	},	

	_next: function () {
		this.swipe.next();
	},

	_prev: function () {
		this.swipe.prev();
	}
});

module.exports = Slides;