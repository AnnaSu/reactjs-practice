var InputBox = require("./InputBox.jsx");
var ContactTable = require("./ContactTable.jsx");
var myStores = require("../stores/ProductStore.js");
var ProductCart = require("./ProductCart.jsx");
var ProductCreate = require("./ProductCreate.jsx");
var AppConstants = require("../constants/AppConstants.js");
var Select = require("./Select.jsx");
var Slides = require("./Slides.jsx");
var Main = React.createClass({
	//private
	_onChange: function() {
		this.setState(myStores.getData());
	},
	getInitialState: function() {
		return myStores.getData();
	},
	render: function() {
		console.log(this.state);
		return (
			<div>
				
				<h2>{this.state.pageTitle}</h2>
				<ProductCreate></ProductCreate>
				<ProductCart truth={this.state}></ProductCart>
				<Select options={this.state.brands}></Select>
				<Slides data={this.state.productCart}></Slides>
			</div>
			
		);
	},
	componentWillMount: function () {
	    myStores.addListener(AppConstants.CHANGE_EVENT,this._onChange);  
	},

});

module.exports = Main;