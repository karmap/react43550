import { useCart } from "../context/cartContext"

const GlassCart = () => {

  const { items, clearCart } = useCart()

  return (
    <div className="m-10 text-xl">
      <div>GlassCart</div>
      <div>{ items.map( i => <li key={i}>{i}</li> ) }</div>
      <button className="btn" onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}
export default GlassCart