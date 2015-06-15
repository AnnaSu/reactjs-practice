var action = require('../actions/AppActionCreator.js');
var ProductCreate = React.createClass({
	getInitialState: function(){
		return {
			productId: null, 
			productName: '', 
			productPrice: 200, 
			productAmount: 1
		};
	},
	render: function() {

		return (
			<div className="col-md-4">
				<div className="form-group">
					<label for="name">商品名稱 </label>
					<input 
						type="text" 
						className="form-control" 
						name="name" 
						value={this.state.productName} 
						onChange={this._nameChange}/>
				</div>
				<div className="form-group">
					<label>商品價格 
						<input 
							type="number" 
							className="form-control" 
							min="200"
							step="1000"
							value={this.state.productPrice} 
							onChange={this._priceChange}/>
					</label>
				</div>
				<div className="form-group">
					<label>商品數量 
						<input 
							type="number"
							className="form-control"
							min="1"
							step="10"
							value={this.state.productAmount} 
							onChange={this._amountChange}/>
					</label>
				</div>
				<button className="btn btn-primary" onClick={this._addProduct}>新增</button>
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
			this.setState({
				productId: null, 
				productName: '', 
				productPrice: 200, 
				productAmount: 1
			});
		}

	} 

});

module.exports = ProductCreate;