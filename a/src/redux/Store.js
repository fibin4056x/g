import { configureStore } from "@reduxjs/toolkit";
import TodosliceReduce from './Todoslice'
const store=configureStore({
    reducer:{
        todos:TodosliceReduce
    }
})
export default store