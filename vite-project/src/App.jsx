import { useState } from 'react'

function App() {
  let [num , settNum] = useState(0)

  function addVal() {
   settNum(num + 1)
    // console.log(num);
  }
  function subVal() {
    if (num !== 0) {
      settNum(num - 1)
      // console.log(num);
      return;
    }

   }
  return (
    <>
      <h1>Hello world</h1>
      <h3><button onClick={addVal}>Add</button> {num} <button onClick={subVal}>Sub</button></h3>
    </>
  )
}

export default App
