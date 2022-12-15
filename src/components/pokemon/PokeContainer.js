import { useEffect, useState } from "react"
import PokeList from "./PokeList"

const PokeContainer = () => {
  
  const [count, setCount] = useState(0)
  const countHandler = () => { setCount( c => c + 1 ) }

  useEffect(() => {
    console.log('PokeContainer hizo render');
  })

  return (
    <>
      <div>PokeContainer</div>
      <button onClick={countHandler}>Contador: {count}</button>
      <PokeList/>
    </>
  )
}
export default PokeContainer