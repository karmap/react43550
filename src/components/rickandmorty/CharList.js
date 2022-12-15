import { useEffect, useState } from "react"
import CharCard from "./CharCard";
import Loader from "./Loader";

const CharList = () => {

  const [personajes, setPersonajes] = useState([])

  useEffect( () => {
    setTimeout(() => {
        getChars()
    }, 3000);
  }, [])

//   const getChars = () => {
//     const URL = 'https://rickandmortyapi.com/api/character'
//     fetch( URL )
//       .then( response => response.json() )
//       .then( data => {
//         console.log( data );
//         setPersonajes( data.results )
//       })
//   }

const getChars = async () => {
    const URL = 'https://rickandmortyapi.com/api/character'
    const response = await fetch( URL )
    const data = await response.json()
    setPersonajes( data.results )
  }

  return (
    <div>
        <Loader loading={ personajes.length == 0 }/>
        <h1>Lista de personajes</h1>
        { personajes.map( p => <CharCard key={p.id} {...p}/> ) }
    </div>
  )
}
export default CharList