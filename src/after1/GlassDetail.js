import { useEffect, useState } from "react"
import { GlassCount } from "./GlassCount"

const ITEM = {id: 1 , title:"RayBan" , description: "Son un Gran Marco de Lentes", price: 1500 , pictureURL:"" , stock: 7}

const GlassDetail = () => {

  const [item, setItem] = useState({})

  useEffect(() => {
    getItemDetail().then( res => {
        setItem( res )
    })
  }, [])
  
  const getItemDetail = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve( ITEM )
        }, 2000);
    })
  }

  return (
    <div>
        <h1>Detalles del producto</h1>
        <li>{item.title}</li>
        <li>{item.description}</li>
        <li>{item.price}</li>
        <GlassCount stock={item.stock}/>
    </div>
  )
}
export default GlassDetail