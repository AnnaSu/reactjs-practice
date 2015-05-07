var jerry = require("./jerry.jsx");
var InputBox = React.createClass({
	//gis tab
	getInitialState: function() {
		return {
			annaText:"" 
		};
	},
	render: function() {
		console.log(this.state);
		return (
			<div>
				<input type="text" value={this.state.annaText} onChange={this.enterText} />
				<h1>Hello {this.state.annaText}</h1> 
				<jerry jerryName={this.props.userName}>{this.props.userName}</jerry>
			</div>
		);
	},
	enterText: function(event){
		this.setState({annaText:event.target.value});
	}

});

module.exports = InputBox;