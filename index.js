import React from 'react'
import { render } from 'react-dom'
import TodoHeader from './components/Header'
import TodoBox from './components/TodoBox'
import TodoFooter from './components/Footer'

/*var TodoContainer = React.createClass({
	render: function(){
		return (
			<div>This is react todos(React.createClass)</div>
		)
	}
})*/

/* React 0.13           React.createClass -> ES6 Class */
class TodoContainer extends React.Component {
	render() {
		return (
			<div className="container">
				<TodoHeader />
				<TodoBox {...this.props} />
				<TodoFooter />
			</div>
		)
	}
}

/*const TodoContainer = () => (
	<div>This is react todos(ES6 - kagol003436)</div>
)*/

render(
	<TodoContainer url_list="/todo/list" url_add="/todo/add" url_modify="/todo/modify" url_remove="/todo/remove" url_batch_remove="/todo/batch/remove" url_allstatus="/todo/allstatus" />,
	document.querySelector('#content')
)
