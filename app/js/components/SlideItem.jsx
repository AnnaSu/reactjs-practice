'use strict';
var SlideItem = React.createClass({
	render: function() {
		var _show = '';
		if(this.props.show){
			_show = 'show';
		}
		return (

			<div>
				<img className="slides-image" src={this.props.data.imageUrl} alt="產品圖片"/>
				<div>
					<h1>{this.props.data.productName}</h1>	
				</div>
			</div>
		);
	}

});
module.exports = SlideItem;