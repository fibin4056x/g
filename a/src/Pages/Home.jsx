import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAPI } from '../redux/Todoslice'

function Home() {
  const [text,settext]=useState('')
  const dispatch=useDispatch()
  
  const handladd=()=>{
    if(text.trim()==0)return;
    dispatch(addTodoAPI(text))
    settext('')
  }
  return (
    <div>
      <input type="text"
      value={text}
      onChange={(e)=>{
        settext(e.target.value)
      }} />
      <button onClick={handladd}>add</button>

    </div>
  )
}

export default Home