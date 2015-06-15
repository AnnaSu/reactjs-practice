'use strict';
var SlideItem = React.createClass({
	render: function() {
		var _show = '';
		if(this.props.show){
			_show = 'show';
		}
		return (
			<div className={_show+' item'}>
				<img className="slidesImage" src={this.props.data.imageUrl} alt="產品圖片"/>
				<div className="slidesImageDescription">
					<h1>{this.props.data.productName}</h1>	
				</div>
			</div>
		);
	}

});
module.exports = SlideItem;