import { useState } from "react"

export const GlassCount = ( { stock } ) => {

  const [count, setCount] = useState(1)

  const onAddHandler = () => {
    if ( count < stock ) {
        setCount( count => count + 1 )
    }
  }
  
  const onSubHandler = () => {
    if ( count >= 1 ) {
        setCount( count => count - 1 )
    }
  }

  return (
    <div>
        <button onClick={onSubHandler} className="btn"> - </button>
        <span className="text-xl m-2">{count}</span>
        <button onClick={onAddHandler} className="btn"> + </button>
    </div>
  )
}