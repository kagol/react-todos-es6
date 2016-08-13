import React from 'react'
import $ from 'jquery'

class TodoItem extends React.Component {
	handleStatus(e) {
		this.props.onChangeStatus({
			id: this.refs.lblText.getAttribute('data-id'),
			text: this.refs.lblText.getAttribute('data-text'),
			isCompleted: e.target.checked
		});
	}
	editText(e) {
		this.props.onChangeStatus({
			id: this.refs.txtText.getAttribute('data-id'),
			text: e.target.value,
			isCompleted: this.refs.txtText.getAttribute('data-iscompleted')
		});
	}
	handleRemove() {
		this.props.onRemoveItem(this.refs.btnRemove.getAttribute('data-id'));
	}
	handleText() {
		$(this.refs.liTodoItem)['0'].className = 'editing';
	}
	handleEnterEvent(e) {
		if(e.keyCode === 13){
			$(this.refs.liTodoItem)['0'].className = '';
		}
	}
	render() {
		return (
			<li ref="liTodoItem">
				<div className="todo-item view">
					<input type="checkbox" checked={this.props.isCompleted} onChange={this.handleStatus.bind(this)} />
					<label ref="lblText" data-text={this.props.text} data-id={this.props.id} data-iscompleted={this.props.isCompleted} onDoubleClick={this.handleText.bind(this)}>{this.props.text}</label>
					<button ref="btnRemove" data-id={this.props.id} className="btn-delete" onClick={this.handleRemove.bind(this)}>X</button>
				</div>
				<input type="text" ref="txtText" className="edit" value={this.props.text} data-id={this.props.id} data-iscompleted={this.props.isCompleted} onChange={this.editText.bind(this)} onKeyDown={this.handleEnterEvent.bind(this)} />
			</li>
		)
	}
}

export default TodoItem