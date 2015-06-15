var Product = require('./Product.jsx');
var action = require('../actions/AppActionCreator.js');

var ProductCart = React.createClass({

	render: function() {
		var products = this.props.truth.productCart;
		var products_raw = products.map(function(item){
			return (<Product productItem={item} del={this._delProduct.bind(this)}></Product>);
		},this);
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>名稱</th>
						<th>價格</th>
						<th>數量</th>
						<th>刪除</th>
					</tr>
				</thead>
				<tbody>{products_raw}</tbody>
			</table>
		);
	},
	_delProduct: function(id){
		var _index;
		this.props.truth.productCart.forEach(function(item,index){
			if(item.productId == id){
				_index=index;
			}
		});
		console.log(_index);
		action.delProduct(_index);
	}

});

module.exports = ProductCart;