// rafce
const Saludo = ( {name, lastname, age, action} ) => {

  const nombreMayus = name.toUpperCase()

  const title = {
    border: 'solid blue 2px',
    margin: '20px',
    padding: '20px'
  }

  return (
    <div style={title}>
      <h1 className="underline text-xl text-orange-700 font-bold">Saludos {nombreMayus} {lastname}</h1>
      <div>Tienes {age} años</div>
      <button onClick={action}> Click </button>
    </div>
  )
}

export default Saludo

