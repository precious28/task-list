import React from 'react';
import './App.css'
import ToDoList from './ToDoList';
class App extends React.Component {

  state = {
    items: [],
    item: '',
  }
  changeHandle = (e) => {
    this.setState({ item: e.target.value });
  }
  addHandler = () => {
    if (this.state.item !== '') {
      const userInput = {
        // Add a random id which is used to delete 
        id: Math.random(),
        // Add a user value to list 
        value: this.state.item,
        show: false
      };

      // Update list 
      const items = [...this.state.items];
      items.push(userInput);

      // reset state 
      this.setState({
        items,
        item: ""
      });
    }
  }
  deleteItem = (id) => {
    const list = [...this.state.items];
    // Filter values and leave value which we need to delete 
    const updateList = list.filter(item => item.id !== id);

    // Update list in state 
    this.setState({
      items: updateList,
    });
  }
  enableEdit = (id) => {
    let items = this.state.items.map(item => (
      item.id === id ? { ...item, show: !item.show } : item
    ))
    this.setState({ items });
  }
  updateHandler = (event, id) => {
    let items = this.state.items.map(item => (
      item.id === id ? { ...item, value: event.target.value } : item
    ))
    this.setState({ items });
  }
  render() {
    return (
      <div className="container-div">
        <div className="child-div-center">
          <h1>ToDo List</h1><br />
          <div>
            <input type="text" className="todo-input" placeholder="Enter the Task" value={this.state.item} onChange={this.changeHandle} />
            <button className="btn-add" onClick={this.addHandler}>+</button>
          </div>
          <div className="todo-list-container">
            {this.state.items ? this.state.items.map((item) => {
              return <ToDoList item={item.value} key={item.id}
                deleteItem={this.deleteItem} id={item.id} showInput={item.show}
                enableEdit={this.enableEdit}
                updateHandler={this.updateHandler}
              />
            }) : null}
          </div>

        </div>
      </div>
    );
  }
}
export default App;