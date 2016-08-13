import React from 'react'
import $ from 'jquery'
import TodoItemInput from './TodoItemInput'
import TodoItemList from './TodoItemList'
import TodoItemStatus from './TodoItemStatus'

class TodoBox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			status: 'all'
		}
	}
	componentDidMount() {
		$.ajax({
			url: this.props.url_list,
			type: 'get',
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({
					data: data
				});
			}.bind(this)// 不加 bind(this) 会报错，"index.js:49 Uncaught TypeError: this.setState is not a function"
		});
	}
	handleTodoSubmit(todo) {
		$.ajax({
			url: this.props.url_add,
			type: 'post',
			dataType: 'json',
			cache: false,
			data: todo,
			success: function(data){
				this.setState({
					data: data
				});
			}.bind(this)
		});
	}
	getDatasByStatus() {
		var arr = this.state.data;
		var status = this.state.status;
		status = status === 'all' ? undefined : (status === 'active' ? false : true)
		if(status === undefined){
			result = arr;
			return result;
		}
		var result = [];
		
		for(var i=0;i<arr.length;i++){
			if(arr[i].isCompleted === status){
				result.push(arr[i]);
			}
		}
		return result;
	}
	handleTodoModify(todo) {
		$.ajax({
			url: this.props.url_modify,
			type: 'post',
			dataType: 'json',
			cache: false,
			data: todo,
			success: function(data){
				this.setState({
					data: data
				});
			}.bind(this)
		});
	}
	handleTodoRemove(ids) {
		$.ajax({
			url: this.props.url_batch_remove,
			type: 'post',
			dataType: 'json',
			cache: false,
			data: {
				ids: ids
			},
			success: function(data){
				this.setState({
					data: data
				});
			}.bind(this)
		});
	}
	handleAllStatus(isAllCompleted) {
		$.ajax({
			url: this.props.url_allstatus,
			type: 'post',
			dataType: 'json',
			cache: false,
			data: {
				isAllCompleted: isAllCompleted
			},
			success: function(data){
				this.setState({
					data: data
				});
			}.bind(this)
		});
	}
	changeStateByStatus(status) {
		this.setState({
			status: status
		});
	}
	getLeftNum() {
		var arr = this.state.data;
		var num = 0;
		var currentStatus = this.state.status;
		if(currentStatus === 'all' || currentStatus === 'active'){
			for(var i=0;i<arr.length;i++){
				if(arr[i].isCompleted === false){
					num++;
				}
			}
		}else if(currentStatus === 'completed'){
			num = 0;
		}
		return num;
	}
	getCompletedNum() {
		var arr = this.state.data;
		var num = 0;
		for(var i=0;i<arr.length;i++){
			if(arr[i].isCompleted === true){
				num++;
			}
		}
		return num;
	}
	handleClearCompleted() {
		var ids = [];
		var arr = this.state.data;
		for(var i=0;i<arr.length;i++){
			if(arr[i].isCompleted === true){
				ids.push(arr[i].id);
			}
		}
		this.handleTodoRemove(ids.join(','));
	}
	getAllStatus() {
		var arr = this.state.data;
		var num = 0;
		for(var i=0;i<arr.length;i++){
			if(arr[i].isCompleted === true){
				num++;
			}
		}
		return num === arr.length ? true : false;
	}
	render() {
		return (
			<div className="todo-box">
				<TodoItemInput onTodoSubmit={this.handleTodoSubmit.bind(this)} onTodoAllStatus={this.handleAllStatus.bind(this)} onTodoGetAllStatus={this.getAllStatus.bind(this)} />
				<TodoItemList data={this.state.data} onTodoGetDatasByStatus={this.getDatasByStatus()} onTodoModify={this.handleTodoModify.bind(this)} onTodoRemove={this.handleTodoRemove.bind(this)} />
				<TodoItemStatus onTodoClearCompleted={this.handleClearCompleted.bind(this)} onTodoChangeStateByStatus={this.changeStateByStatus.bind(this)} onTodoLeftNum={this.getLeftNum()} onTodoCompletedNum={this.getCompletedNum()} />
			</div>
		)
	}
}

export default TodoBox