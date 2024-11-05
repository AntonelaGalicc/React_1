import React, { Component } from "react";
import Jumbotron from "./Jumbotron.js";
import NewTodo from "./NewTodo.js";
import TodoList from "./TodoList.js";
import "./App.css";

class App extends Component {

    state = {
        todos: [

        ]
            
    }
    componentDidMount(){
        let data = [];
        if(localStorage.data){
            data = JSON.parse(localStorage.data)
        }
        this.setState({
            todos: data
        })
    }
    

    addIntoTodos = (todo) => {
        todo.id=Math.floor(Math.random()*(1000-10)-10);
        localStorage.data = JSON.stringify([...this.state.todos,todo])
        this.setState({todos: [...this.state.todos, todo]});
    }

    markTodo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos[index].done = !copyTodos[index].done;
        localStorage.data=JSON.stringify(copyTodos); //ovo je kljucno znati
        this.setState({ todos: copyTodos });
    }

    deleteTodo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos.splice(index, 1); //metoda splice brise el iz arraya
        localStorage.data=JSON.stringify(copyTodos);
        this.setState({ todos: copyTodos });
    }

    render() {
        return (
            <div className="wrapp">
                <Jumbotron />
                <NewTodo addIntoTodos={this.addIntoTodos}/>
                <TodoList
                    todos={this.state.todos}
                    markTodo={this.markTodo}
                    deleteTodo={this.deleteTodo}  // Pass deleteTodo to TodoList
                />
            </div>
        );
    }
}

export default App;
