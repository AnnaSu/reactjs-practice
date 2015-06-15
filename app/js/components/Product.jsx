
var Product = React.createClass({
	render: function() {
		console.log(this.props.productItem);
		return (
			<tr>
				<td>{this.props.productItem.productName}</td>
				<td>{this.props.productItem.productPrice}</td>
				<td>{this.props.productItem.productAmount}</td>
				<td>
					<button className="btn btn-danger" onClick={this._delProduct.bind(this)}>刪除</button>
				</td>
			</tr>
		);
	},
	_delProduct: function(event){
		event.preventDefault();
		return this.props.del(this.props.productItem.productId);
	}

});

module.exports = Product;