var React = require("react");
var actions = require("../actions/ChoresActions");

module.exports = React.createClass({
	getInitialState: function(){
		return{
			name: "",
			expectedTime: "",
			image: ""
		}
	},
	addChore:function(e){
		e.preventDefault();
		actions.addChore(this.state);

	},
	handleInputChange:function(e){
		e.preventDefault();
		console.log(this.state);
		var name = e.target.name;
		var state = this.state;
		state[name] = e.target.value;
		this.setState(state);
	},
	render:function(){
		return(<div>
			<form className="form" onSubmit={this.addChore}>
				<div className="form-group">
					<label className="control-label" htmlFor="name">Chore Name: </label>
					<input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange}/>
				</div>
				<div className="form-group">
					<label className="control-label" htmlFor="expectedTime">Estimated Time: </label>
					<input type="text" className="form-control" id="expectedTime" value={this.state.address} name="expectedTime" onChange={this.handleInputChange}/>
				</div>

				<div className="form-group">
					<label className="control-label" htmlFor="image">Image Url: </label>
					<input type="text" className="form-control" id="image" value={this.state.address} name="image" onChange={this.handleInputChange}/>
				</div>
				<div className="form-group">
					<button className="btn" type="submit">Add Chore</button>
				</div>
			</form>
		</div>
		)
	}

})