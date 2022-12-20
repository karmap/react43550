import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/glasses"
import { GlassCard } from "./GlassCard"

const GlassesList = () => {

  const [items, setItems] = useState([])

  useEffect( () => {
    // (async () => {
    //     const res = await getProducts()
    //     console.log(res);
    // })()
    getProducts()
        .then( res => {
            // console.log(res);
            setItems( res )
        })
        .catch( err => { console.log(err) })
  }, [])

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve( PRODUCTS )
        }, 500);
    })
  }

  return (
    <div>
        { items.map( i => <GlassCard key={i.id} {...i}/> ) }
    </div>
  )
}
export default GlassesList