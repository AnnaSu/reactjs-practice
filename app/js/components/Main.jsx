var InputBox=require("./InputBox.jsx");
var ContactTable=require("./ContactTable.jsx");
var myStores=require("../stores/ProductStore.js");
var ProductCart=require("./ProductCart.jsx");
var ProductCreate=require("./ProductCreate.jsx");
var AppConstants=require("../constants/AppConstants.js");
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
				<!--<InputBox userName={this.state.pageUserName}></InputBox>-->
				<!--<ContactTable></ContactTable>-->
				<h2>{this.state.pageTitle}</h2>
				<ProductCreate></ProductCreate>
				<ProductCart truth={this.state}></ProductCart>
				
			</div>
			
		);
	},
	componentWillMount: function () {
	    myStores.addListener(AppConstants.CHANGE_EVENT,this._onChange);  
	},

});

module.exports = Main;