import React, { Component } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import Header from './modules/header/header.module';
import TodoElement from './modules/content/content.module';
import Footer from "./modules/footer/footer.module";

class App extends Component{

  state = {
    todo: [
      {
        text: 'Do homework',
        isDone: false,
        id: uuidv4(),
      },
      {
        text: 'Task 2',
        isDone: true,
        id: uuidv4(),
      },
    ]
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
    this.setState({
      todo: [],
    })
  }

  addTodo = (todo) => {
    const { text } = todo;
    this.setState((state) => ({
      todo: [
          ...state.todo,
        {
          text,
          isDone: false,
          id: uuidv4(),
        }
        ]
    }));
  }
}

export default App;
