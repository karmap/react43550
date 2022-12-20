import { useCart } from "../context/cartContext"
import { getFirestore, collection, addDoc, doc, updateDoc, writeBatch } from "firebase/firestore"

const GlassCart = () => {

  const { items, clearCart } = useCart()

  // Con return
  // if ( items.length == 0 ) {
  //   return <h1 className="text-xl m-10">Agrega items a tu carrito</h1>
  // }

  const makeOrder = () => {
    const user = {name: 'Ana', phone: 213213421, email: 'juan@gmail.com'}
    const order = {
      buyer: user,
      items: items
    }
    console.log('Levantando la order: ', order);
    saveOrder( order )
  }

  const saveOrder = async ( order ) => {
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    const {id} = await addDoc( orderCollection, order)
    console.log('Nueva orden: ', id);
  }

  const editOrder = ( id ) => {
    const db = getFirestore()
    const orderDoc = doc(db, 'orders', id)
    updateDoc(orderDoc,{
      buyer: {
        name: 'Florencia',
        phone: 7777888888,
        email: 'florencia@gmail.com'},
      total: 250
      }).then( res => { console.log(res); })
  }

  const editOrderHandler = () => {
    editOrder('4mHXyy3sGdDe6bQ4MjUz')
  }

  const makeBatch = () => {
    const db = getFirestore()
    
    const order1 = doc(db, 'orders', '3ZZ3kZjF9xsDzFy0KeZU')
    const order2 = doc(db, 'orders', 'TwWUC4SG8FwYjHeMm3RG')

    const batch = writeBatch( db )

    batch.update(order1, { total: 77})
    batch.update(order2, { total: 44})

    batch.commit()
  }

  return (
    <div className="m-10 text-xl">
      <div>GlassCart</div>
      { /* Con && */ }
      {/* { items.length == 0 && <h1 className="text-xl m-10">Agrega items a tu carrito</h1>} */}
      { items.length === 0 ?
        <h1 className="text-xl m-10">Agrega items a tu carrito</h1>
        :
        <h1>Estos son tus items:</h1>
      }
      <div>{ items.map( i => <li key={i}>{i}</li> ) }</div>
      <button className="btn" onClick={clearCart}>Vaciar carrito</button>
      <button className="btn" onClick={makeOrder}>Comprar</button>
      <button className="btn" onClick={editOrderHandler}>Actualizar Orden</button>
      <button className="btn" onClick={makeBatch}>Batch</button>
    </div>
  )
}
export default GlassCart