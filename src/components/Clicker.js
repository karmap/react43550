import React, { useEffect, useState } from 'react'

const Clicker = () => {

//   let count = 0
  const [count, setCount] = useState(0)

  const clickHandler = () => {
    console.log('se hizo click');
    // count = count + 1
    setCount( count + 1 )
  }

  // En el montaje y cada vez que se haga render
  useEffect( () => {
    console.log('Se hizo render');
    // Esta función se ejecuta en el desmontaje
    return () => {}
  })

  // Solo en el montaje
  useEffect( () => {
    console.log('Este efecto solo en montaje');
  }, [])

  // En el montaje y cada vez que cambie count
  useEffect( () => {
    console.log('Este efecto en montaje y cuando cambia count');
  }, [count])

  return (
    <div className='p-5 flex flex-col'>
        <strong>Clicker</strong>
        <button onClick={clickHandler} className='btn'>Aumentar</button>
        <strong>{ count }</strong>
    </div>
  )
}

export default Clicker