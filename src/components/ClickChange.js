import { useEffect, useState } from "react";

const LoadingView = () => {
  return (
    <strong className="text-xl m-10">Cargando ...</strong>
  )
}

const Ready = () => {
  return (
    <strong className="text-xl m-10">Listo!</strong>
  )
}

const ClickChange = () => {

  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      console.log('cargado!');
      setLoading(false)
    }, 5000);
  }, [])

  console.log(loading);
  
  return (
    <div>
      { loading ? <LoadingView/> : <Ready/> }
    </div>
  )
}
export default ClickChange