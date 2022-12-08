const ClickEvent = () => {

  const onClickHandler = ( e ) => {
    console.log('click --->');
    console.log( e.nativeEvent );
  }

  const onKeyDownInput = ( event ) => {
    console.log('tecla: ', event.key);
    const vocales = ['a','e','i','o','u']
    if ( vocales.includes( event.key.toLowerCase() ) ) {
        event.preventDefault()
    }
  }

  return (
    <div className="m-10">
        <button onClick={onClickHandler} className="btn">Da click aquí</button>
        <h1 className="text-xl my-5">Input que no permite vocales</h1>
        <input onKeyDown={onKeyDownInput} className="p-2 text-xl drop-shadow-lg border-2 border-sky-500" type='text' />
    </div>
  )
}
export default ClickEvent