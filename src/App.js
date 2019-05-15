import React from 'react'
import './App.css';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={ value:'',
    todos:[]
  };  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt){
    this.setState({value:evt.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
  }
  save() {
    var todos = [...this.state.todos];
    todos.push(this.newText.value);
    this.setState({todos});
  }
  clearAll() {
    let todos = [...this.state.todos];
    todos=[];

    this.setState({todos});
  }

  
  render() {
    return (
      <div className= "App">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label className=''>
            Name:
        </label>
          <input type="text"
            ref={(name) => { this.newText = name }}
          />
          <button onClick={this.save.bind(this)} className="btn btn-primary glyphicon glyphicon-floppy-saved">Save
              </button>
          <ul className="No-list-style">
            {this.state.todos.map(todo =>
              todo && <li>{todo}</li>
            )}
          </ul>
        </form>
        <button onClick={this.clearAll.bind(this)} className="btn btn-primary glyphicon glyphicon-floppy-saved">Clear all</button>
      </div>
    )
  }
}
export default App