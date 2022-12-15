import { useCart } from "../context/cartContext"

const GlassCart = () => {

  const { items, clearCart } = useCart()

  // Con return
  // if ( items.length == 0 ) {
  //   return <h1 className="text-xl m-10">Agrega items a tu carrito</h1>
  // }

  return (
    <div className="m-10 text-xl">
      <div>GlassCart</div>
      { /* Con && */ }
      {/* { items.length == 0 && <h1 className="text-xl m-10">Agrega items a tu carrito</h1>} */}
      { items.length == 0 ?
        <h1 className="text-xl m-10">Agrega items a tu carrito</h1>
        :
        <h1>Estos son tus items:</h1>
      }
      <div>{ items.map( i => <li key={i}>{i}</li> ) }</div>
      <button className="btn" onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}
export default GlassCart