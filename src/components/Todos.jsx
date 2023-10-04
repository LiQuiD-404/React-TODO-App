import React, { useState, useEffect } from 'react'
import TodoForm from '../components/TodoForm'
import { v4 as uuidv4 } from "uuid";
import TodoContainer from './TodoContainer';
import EditTodo from '../components/EditTodo';
uuidv4();

const Todos = () => {
    const [todos, setTodos] = useState([])
    function dataHandler(todo) {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, isEditing: false }]);
    }

    function deleteTodo(e) {
        let todel = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id
        const updatedTodos = todos.filter((todo) => todo.id !== todel);
        setTodos(updatedTodos);
    }

    function editTodo(e) {
        let toedit = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id
        const updatedTodos = todos.map((todo) => {
            if (todo.id === toedit) {
                return {
                  ...todo,
                    isEditing: !todo.isEditing,
                }
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    function updateTodo(data){
        const updatedTodos = todos.map((todo) => {
            if (todo.isEditing) {
                return {
                  ...todo,
                    isEditing: !todo.isEditing,
                    task: data,
                }
            }
            return todo;
        });
        setTodos(updatedTodos);

    }



    return (
        <>
            <TodoForm TodoData={dataHandler} />

            {todos.map((todo) => (
                todo.isEditing === true ? (
                    <EditTodo task={todo.task} updateTodo={updateTodo}/>
                ) : (
                    <TodoContainer id={todo.id} key={todo.id} text={todo.task} deleteTodo={deleteTodo} editTodo={editTodo}/>
                )
                
            ))}
        </>
    )
}

export default Todos
