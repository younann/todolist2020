import React, { Component } from 'react';

export class AddTodos extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit=(e)=>{
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title:''})
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="add Todo...."
          style={inputStyle}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}
const labelStyle = {
  color: '#333',
  fontWeight: '600',
  fontSize: '25px',
};
const inputStyle = {
  fontSize: '25px',
  flex: '10',
};
export default AddTodos;
