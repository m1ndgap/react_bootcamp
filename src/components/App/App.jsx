import React from 'react'

import Footer from '../Footer/Footer.jsx'
import ToDoItem from '../ToDoItem/ToDoItem.jsx'
import todosData from '../../todosData.js'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        // GET the data I need to correctly display
    }

    componentWillReceiveProps() {

    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>);
        return (
            <div>
                <h1>Hewwo</h1>
                <ul>
                    {todoItems}
                </ul>
                <Footer />
            </div>
        )
    }
}

export default App
