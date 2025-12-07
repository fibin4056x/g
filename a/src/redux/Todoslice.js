import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:3000/todos'

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await axios.get(API_URL)
    return response.data
  }
)

export const addTodoAPI = createAsyncThunk(
  'todos/addTodoAPI',
  async (text) => {
    const newTodo = {
      id: nanoid(),
      text: text
    }
    const response = await axios.post(API_URL, newTodo)
    return response.data
  }
)

export const deleteTodoAPI = createAsyncThunk(
  'todos/deleteTodoAPI',
  async (id) => {
    await axios.delete(`${API_URL}/${id}`)
    return id
  }
)

const initialState={
    item:[],
    loading: false,
    error: null
}

const Todoslice=createSlice({
  name:"todos",
  initialState:initialState,
  reducers:{
    addtodo:(state,action)=>{
        state.item.push({
            id:nanoid(),
            text:action.payload
        })
    },
    deletetodo:(state,action)=>{
        state.item=state.item.filter(i=> i.id!==action.payload)
    }
  },
  extraReducers: (builder) => {
     
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false
        state.item = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
    

    builder
      .addCase(addTodoAPI.pending, (state) => {
        state.loading = true
      })
      .addCase(addTodoAPI.fulfilled, (state, action) => {
        state.loading = false
        state.item.push(action.payload)
      })
      .addCase(addTodoAPI.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
    

    builder
      .addCase(deleteTodoAPI.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteTodoAPI.fulfilled, (state, action) => {
        state.loading = false
        state.item = state.item.filter(i => i.id !== action.payload)
      })
      .addCase(deleteTodoAPI.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

 export const {addtodo,deletetodo}=Todoslice.actions
 export default Todoslice.reducer