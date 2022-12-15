import { memo, useEffect, useState } from "react"
import PokeCard from "./PokeCard"

const PokeList = memo( () => {

  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    getPokemons().then( res => {
      console.log( res );
      setPokemons( res.results )
    })
  }, [])

  useEffect(() => {
    console.log('PokeList hizo render');
  })
  
  const getPokemons = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/'
    const res = await fetch(URL)
    const data = await res.json()
    return data
  }

  return (
    <div>
      { pokemons.map( p => <PokeCard {...p} key={p.url}/> )}
    </div>
  )
})

export default PokeList