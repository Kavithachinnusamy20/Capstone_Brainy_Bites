// import { useState } from 'react'

import { useEffect } from 'react'
import './App.css'
function App() {
  async function getData() {
    try {
      const response = await fetch(BASE_URL + '/todos')
      const data = await response.json()
      setTodos(data)
    } catch (e) {
      console.log(e)
    }
  }
// Initial Data Load with useEffect
//- When the component mounts, getData() runs once.
//- The empty array [] ensures it doesn’t re-run on every render

  useEffect(() => {
    getData()
  }, [])
return (
    <>
      Hello(client)
    </>
  )
}

export default App
