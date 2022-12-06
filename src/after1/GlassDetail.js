import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PRODUCTS } from "../data/glasses"
import { GlassCount } from "./GlassCount"

const GlassDetail = () => {

  const [item, setItem] = useState({})
  const { id } = useParams()

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

  return (
    <div>
        <h1>Detalles del producto: { id }</h1>
        <li>{item.title}</li>
        <li>{item.description}</li>
        <li>{item.price}</li>
        <GlassCount stock={item.stock}/>
    </div>
  )
}
export default GlassDetail