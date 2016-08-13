import React from 'react'

class TodoFooter extends React.Component {
	render() {
		return (
			<footer className="footer">
				<p>Double-click to edit a todo</p>
				<p>Created by <a href="http://www.cnblogs.com/kagol">kagol</a></p>
				<p>Part of TodoMVC</p>
			</footer>
		)
	}
}

export default TodoFooter