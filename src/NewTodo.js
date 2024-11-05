import React, { Component } from "react";

class NewTodo extends Component {
    state = {
        msg: "",  // Message for the new todo
        done: false  // Whether the todo is done or not (default is false)
    };

    // Correct the typo: 'taget' -> 'target'
    setNewMsg = (e) => {
        this.setState({
            msg: e.target.value  // Update the msg state when user types in the input
        });
    };

    addTodo = () => {
        // Pass the new todo state to the parent component (App)
        this.props.addIntoTodos(this.state);
        this.setState({ msg: "", done: false });  // Clear input field after adding
    };

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-8 offset-2">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter new todo"
                                value={this.state.msg}  // Bind input value to state
                                onChange={this.setNewMsg}  // Update state on input change
                            />
                            <div className="input-group-append">
                                <button
                                    onClick={this.addTodo}  // Add the todo when clicked
                                    className="btn btn-primary"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewTodo;
