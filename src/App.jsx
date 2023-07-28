
import React from 'react'
import './App.css'
import { todos } from './todos';
import List from './components/List/List';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos: todos,
      inputVal: '',
    }
  }


  handleInputChange = (event) => {
    this.setState(prevState => {
      return({
        ...prevState,
        inputVal: event.target.value
      })
    })
  }


  handleDeleteTodo = (id) => {
    const newArr = this.state.todos.slice(0);

    const filtered = newArr.filter(todo => todo.id !== id);

    this.setState(prevState => {
      return({
        ...prevState,
        todos: filtered
      })
    })
  }

  // handleEdit = ( input) => {
  //   this.setState(prevState => {
  //     return({
  //       ...prevState,
  //       inputVal: input
  //     })
  //   })
  // }


  handleAddTodo = () => {

    const { todos, inputVal } = this.state

    const newTodo = [...todos]
    const newId = newTodo.length ? newTodo[newTodo.length - 1].id + 1 : 1;
    const inputValue = inputVal.length ? inputVal : alert("TYPE TODO!!!")


    newTodo.push({
      id: newId,
      name: inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase()
    })

    localStorage.setItem('todos', JSON.stringify(newTodo));
    
    this.setState(prevState => {
      return({
        ...prevState,
        todos:  newTodo,
        inputVal: ''
      })
    })
    // this.setState(prevState => {
    //   return({
    //     ...prevState,
    //     todos: [...todos, JSON.stringify(localStorage.getItem("todos", this.state.inputVal)]
    //   })
    // })
  }

  render(){

    const { todos, inputVal } = this.state
    const {handleAddTodo, handleInputChange, handleDeleteTodo, handleEdit} = this

    return(
      <div className='App'>
        <div className='container'>
          <header>
            <input
              type='text'
              placeholder='type todo'
              value={inputVal}
              onChange={handleInputChange}
            />
            <button onClick={handleAddTodo} >Add todo</button>
          </header>
          <main>
            <ul>
              { todos.length ? 
                todos.map((todo, index) => {
                  return(
                    <List
                      key={index}
                      name={todo.name}
                      id={todo.id}
                      handleDelete={handleDeleteTodo}
                      // handleTodoEdit={handleEdit}
                    />
                  )
                })
                :
                
                  <p><strong>No todo found!!!</strong></p>
                
              }
            </ul>
          </main>
        </div>
      </div>
    )
  }
}

export default App
