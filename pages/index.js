import React, { useState } from 'react'
export default function Home() {

  let [count, setCount] = useState(0)

  return (
    <div >
      <button onClick={() => setCount(count + 1)}>click here</button>
      <h1>contador {count}</h1>
    </div>
  )
}
