var action = require('../actions/AppActionCreator.js');
var ProductCreate = React.createClass({
	getInitialState: function(){
		return {productId:null,productName:'',productPrice:0,productAmount:0};
	},
	render: function() {

		return (
			<div>
				<label>商品名稱 <input type="text" value={this.state.productName} onChange={this._nameChange}/></label>
				<label>商品價格 <input type="number" value={this.state.productPrice} onChange={this._priceChange}/></label>
				<label>商品數量 <input type="number" value={this.state.productAmount} onChange={this._amountChange}/></label>
				<button onClick={this._addProduct}>新增</button>
			</div>
		);
	},
	_nameChange: function(event){
		this.setState({productName:event.target.value});
	},
	_priceChange: function(event){
		this.setState({productPrice:event.target.value});
	},
	_amountChange: function(event){
		this.setState({productAmount:event.target.value});
	},
	_addProduct: function(event){
		event.preventDefault();
		//拿掉前後空白
		this.state.productName=this.state.productName.trim();
		if(this.state.productName){
			this.state.productId = window.uid++;
			action.addProduct(this.state);
			this.setState({productId:null,productName:'',productPrice:0,productAmount:0});
		}

	} 

});

module.exports = ProductCreate;