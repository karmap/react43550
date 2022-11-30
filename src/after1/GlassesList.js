import { useEffect, useState } from "react"
import { GlassCard } from "./GlassCard"

const PRODUCTS = [
    {id: 1 , title:"RayBan" , description: "Son un Gran Marco de Lentes", price: 1500 , pictureURL:"" , stock: 14},
    {id: 2 , title:"Vogue" , description: "Son un Gran Marco de Lentes", price: 1200 , pictureURL:"" , stock: 12},
    {id: 3 , title:"Rusty" , description: "Son un Gran Marco de Lentes", price: 1350 , pictureURL:"" , stock: 6},
    {id: 4 , title:"Vulk" , description: "Son un Gran Marco de Lentes", price: 1400 , pictureURL:"" , stock: 18},
]

const GlassesList = () => {

  const [items, setItems] = useState([])

  useEffect( () => {
    // (async () => {
    //     const res = await getProducts()
    //     console.log(res);
    // })()
    getProducts()
        .then( res => {
            console.log(res);
            setItems( res )
        })
        .catch( err => { console.log(err) })
  }, [])

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve( PRODUCTS )
        }, 2000);
    })
  }

  return (
    <div>
        { items.map( i => <GlassCard key={i.id} {...i}/> ) }
    </div>
  )
}
export default GlassesList