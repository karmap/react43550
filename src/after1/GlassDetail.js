import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../context/cartContext"
import { PRODUCTS } from "../data/glasses"
import { GlassCount } from "./GlassCount"

const GlassDetail = () => {

  const [item, setItem] = useState({})
  const { id } = useParams()

  const { addToCart } = useCart()

  useEffect(() => {
    getItemDetail().then( res => {
        setItem( res )
    })
  }, [ id ])
  
  const getItemDetail = () => {
    return new Promise( (resolve, reject) => {
      const item = PRODUCTS.find( p => p.id == id )
      setTimeout(() => {
          resolve( item )
      }, 500);
    })
  }

  const addHandler = () => {
    addToCart( id )
  }

  return (
    <div>
        <h1>Detalles del producto: { id }</h1>
        <li>{item.title}</li>
        <li>{item.description}</li>
        <li>{item.price}</li>
        <GlassCount stock={item.stock}/>
        <button className="btn" onClick={addHandler}>Agregar al carrito</button>
    </div>
  )
}
export default GlassDetail