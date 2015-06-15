var React = require('react');

var Select = React.createClass({

	render: function() {
		console.log(this.props.options);
		var options = this.props.options.map(function(item){
			return <option value={item.value}>{item.name}</option>
		});
		return (
				<select>
					{options}
				</select>
		);
	}

});

module.exports = Select;