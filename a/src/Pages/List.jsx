import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodoAPI, fetchTodos } from '../redux/Todoslice'

function List() {
  const todos = useSelector(state => state.todos.item)
  const loading = useSelector(state => state.todos.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteTodoAPI(id))
  }

  if (loading) {
    return <div><p>Loading...</p></div>
  }

  return (
    <div>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>No todos yet. Add one from the home page!</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default List
