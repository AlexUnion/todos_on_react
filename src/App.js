import React, { Component } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import Header from './modules/header/header.module';
import TodoElement from './modules/content/content.module';
import Footer from "./modules/footer/footer.module";

const STORAGE_KEY = 'todo_storage';

class App extends Component{

  state = {
    todo: []
  }

  constructor() {
    super();

    this.state.todo = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  }

  render() {

    const { todo } = this.state;
    const length = todo.length;

    return (
        <div className="App">
          <Header addTodo={this.addTodo} handleDeleteAll={this.handleDeleteAll}/>
          <div className={'content'}>
            <ul>
              {todo.map(({text, id}) => (
                  <TodoElement key={id} innerText={text}/>
                  )
              )}
            </ul>
          </div>
          <Footer quantity={length}/>
        </div>
    );
  }

  handleDeleteAll = () => {
    localStorage.removeItem(STORAGE_KEY);
    this.setState({
      todo: [],
    });
  }

  addTodo = ({ text }) => {
    this.setState(({ todo }) => {

      const arr = [
          ...todo,
          {
            text,
            isDone: false,
            id: uuidv4(),
          }
      ];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));

      return {
        todo: arr
      }
    });
  }
}

export default App;
