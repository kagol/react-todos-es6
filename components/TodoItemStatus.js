import React from 'react'

class TodoItemStatus extends React.Component {
	changeStatusToAll(e) {
		e.preventDefault();
		this.props.onTodoChangeStateByStatus('all');
	}
	changeStatusToActive(e) {
		e.preventDefault();
		this.props.onTodoChangeStateByStatus('active');
	}
	changeStatusToCompleted(e) {
		e.preventDefault();
		this.props.onTodoChangeStateByStatus('completed');
	}
	clearCompleted(e) {
		e.preventDefault();
		this.props.onTodoClearCompleted();
	}
	render() {
		var leftnum = this.props.onTodoLeftNum;
		var itemtext = leftnum < 2 ? 'item' : 'items';
		var completednum = this.props.onTodoCompletedNum;
		console.log('completednum:'+completednum);
		var btnCompletedNode = completednum > 0 ? <button onClick={this.clearCompleted.bind(this)}>Clear completed</button> : '';
		return (
			<div>
				<span>{leftnum} {itemtext} left</span>
				<ul>
					<li><a href="javascript:void(0);" onClick={this.changeStatusToAll.bind(this)}>All</a></li>
					<li><a href="javascript:void(0);" onClick={this.changeStatusToActive.bind(this)}>Active</a></li>
					<li><a href="javascript:void(0);" onClick={this.changeStatusToCompleted.bind(this)}>Completed</a></li>
				</ul>
				{btnCompletedNode}
			</div>
		)
	}
}

export default TodoItemStatus