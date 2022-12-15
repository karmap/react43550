import { useEffect } from "react";

const PokeCard = ( {name} ) => {

  useEffect(() => {
    console.log('PokeCard hizo render'); 
  })

  return (
    <h1 className="capitalize text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {name}
    </h1>
  )
}
export default PokeCard