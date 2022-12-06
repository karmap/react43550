import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CharDetail = () => {

  const [char, setChar] = useState()
  const { charId } = useParams()

  useEffect(() => {
    getCharDetail()
  }, [ charId ])

  const getCharDetail = async () => {
    const URL = 'https://rickandmortyapi.com/api/character/'
    const response = await fetch( URL + charId )
    const data = await response.json()
    console.log(data);
    setChar( data )
  }

  return (
    <div>
        <h1>CharDetail: {charId}</h1>
        <pre>{ JSON.stringify( char ) }</pre>
    </div>
  )
}
export default CharDetail