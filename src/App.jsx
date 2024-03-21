import React, { useState, useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Card from './Card';


function App() {
  // Define state to store the input values
  const [nameText, setNameValue] = useState('');
  const [descText, setDescValue] = useState('');
  const [counter, setCounter] = useState(0);
  const [tStatus, settStatus] = useState(0);
  const [todos, setTodos] = useState([]);

  const FilterStatus = (item) => {
    settStatus(item);
  };

  // Event handler function to update the state when input changes
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  // Event handler function to update the state when input changes
  const handleDescChange = (event) => {
    setDescValue(event.target.value);
  };

  const removeTodo = (todoid) => {
    const newTodo = todos.filter((item) => item.id !== todoid);
    setTodos(newTodo);
  }

  const editTodo = (todoName, todoDesc, todoid) => {

    setNameValue(todoName);
    setDescValue(todoDesc);
    //    console.log(todoid);

    const newTodo = todos.filter((item) => item.id !== todoid);
    setTodos(newTodo);
  }

  const SetStatus = (todoid,todostatus) => {
    const newTodo = todos.map((item) => {
      if (item.id === todoid) {
        return { ...item, status: todostatus };
      } else {
        return item;
      }
    });
    setTodos(newTodo);
  }

  // Event handler function to add a new todo
  const addTodo = () => {
   if (!nameText || !descText) {
    alert('Please fill in both Name and Description fields.');
    return; // Exit the function early if either field is empty
  }

  console.log(`Name: ${nameText}, Desc: ${descText}\n`)
    // Create a new todo object
    const newTodo = {
      name: nameText,
      description: descText,
      id: counter,
      status: false
    };
    setCounter((counter) => counter + 1)
    // Update the todos state with the new todo
    setTodos([...todos, newTodo]);

    // Clear the input fields after adding todo
    setNameValue('');
    setDescValue('');
  };

  return (
    <>
      <div className="card p-3 mb-2 bg-success bg-gradient-success">
        <div className="card-body">

          <div className="text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="Check" width="60" />
            <h2>Task List</h2>
          </div>

          <form>
            <div className="form-group row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Todo Name" value={nameText} onChange={handleNameChange} />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Todo Description" value={descText} onChange={handleDescChange} />
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-warning" onClick={addTodo}>Add Todo</button>
              </div>
            </div>
          </form>

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-auto">
                <div className="col-md-11">
                  <h3>My Todos</h3>
                </div>
                <div className="col-md-1">
                  {/* <!-- Example single danger button --> */}
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Filter
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#" onClick={() => FilterStatus(0)}>All</a></li>
                      <li><a className="dropdown-item" href="#" onClick={() => FilterStatus(1)}>Completed</a></li>
                      <li><a className="dropdown-item" href="#" onClick={() => FilterStatus(2)}>Not Completed</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row row-cols-auto">
                {tStatus === 2 ? (todos.filter((item) => item.status === false).map((todo) => (
                  <div className="col-md-4 mb-3" key={todo.id}>
                    <Card name={todo.name} description={todo.description} id={todo.id} status={todo.status} removeTodo={removeTodo} editTodo={editTodo} SetStatus={SetStatus} />
                  </div>
                ))) : (tStatus === 1) ? (todos.filter((item) => item.status === true).map((todo) => (
                  <div className="col-md-4 mb-3" key={todo.id}>
                    <Card name={todo.name} description={todo.description} id={todo.id} status={todo.status} removeTodo={removeTodo} editTodo={editTodo} SetStatus={SetStatus}/>
                  </div>
                ))) : (todos.map((todo) => (
                  <div className="col-md-4 mb-3" key={todo.id}>
                    <Card name={todo.name} description={todo.description} id={todo.id} status={todo.status} removeTodo={removeTodo} editTodo={editTodo} SetStatus={SetStatus}/>
                  </div>
                )))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


