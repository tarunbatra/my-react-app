import React from 'react';

class ProfileBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.handleChange = this.handleChange.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addNewTodo(event) {
    event.preventDefault();
    if (!this.state.newTodo || this.state.todos.includes(this.state.newTodo)) return;

    this.setState(prevState => ({
      todos: prevState.todos.concat(this.state.newTodo),
      newTodo: '',
      edit: false
    }));

  }

  editTodo(event) {
    event.preventDefault();
    const selectedTodo = event.target.name;
    this.setState({
      edit: true,
      newTodo: selectedTodo,
      todos: this.state.todos.filter(todo => todo !== selectedTodo)
    });
  }

  deleteTodo(event) {
    event.preventDefault();
    const selectedTodo = event.target.name;
    this.setState({
      todos: this.state.todos.filter(todo => todo !== selectedTodo)
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.addNewTodo}>
          <input type="text" name="newTodo" value={this.state.newTodo} onChange={this.handleChange} placeholder="Add todo" required />
          <input type="submit" value={this.state.edit ? 'Update' : 'Add'} />
        </form>
        <div>
          {this.state.todos.map(todo => (
            <div key={todo}>
              <a href="" onClick={this.deleteTodo} name={todo} > ✖️ </a>
              <a href="" onClick={this.editTodo} name={todo} > ✏️ </a>
              <label>{todo}</label>
            </div>)
          )}
        </div>
      </div>
    );
  }
};

export default ProfileBuilder;
