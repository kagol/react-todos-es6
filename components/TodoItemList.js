import React from 'react'
import TodoItem from './TodoItem'

class TodoItemList extends React.Component {
	handleChangeStatus(obj) {
		this.props.onTodoModify(obj);
	}
	handleRemoveItem(id) {
		this.props.onTodoRemove(id);
	}
	render() {
		var todoNodes = this.props.onTodoGetDatasByStatus.map(function(todo){
			return (
				<TodoItem key={todo.id} id={todo.id} text={todo.text} isCompleted={todo.isCompleted} onChangeStatus={this.handleChangeStatus.bind(this)} onRemoveItem={this.handleRemoveItem.bind(this)} />
			)
		}.bind(this))
		return (
			<ul className="todo-item-list">
				{todoNodes}
			</ul>
		)
	}
}

export default TodoItemList