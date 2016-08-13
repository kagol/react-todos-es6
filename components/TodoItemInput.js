import React from 'react'

class TodoItemInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
			isCompleted: false,
			allIsCompleted: false
		}
	}
	componentWillReceiveProps() {
		var allIsCompleted = this.props.onTodoGetAllStatus();
		this.setState({
			allIsCompleted: allIsCompleted
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.onTodoSubmit(this.state);
		this.setState({text: ''});
	}
	handleText(e) {
		this.setState({
			text: e.target.value
		});
	}
	handleChangeAllStatus() {
		this.props.onTodoAllStatus(!this.state.allIsCompleted);
		this.setState({
			allIsCompleted: !this.state.allIsCompleted
		});
	}
	render() {
		return (
			<form className="todo-item-input" onSubmit={this.handleSubmit.bind(this)}>
				<input type="checkbox" checked={this.state.allIsCompleted} onChange={this.handleChangeAllStatus.bind(this)} />
				<input type="text" onChange={this.handleText.bind(this)} placeholder="What needs to be done?"  />
			</form>
		)
	}
}

export default TodoItemInput