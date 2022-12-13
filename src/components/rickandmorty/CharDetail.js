import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DarkmodeContext } from "../../context/darkmodeContext"

const CharDetail = () => {

  const [char, setChar] = useState()
  const { charId } = useParams()
  const darkmode = useContext(DarkmodeContext)

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
        <p className="text-xl">Darkmode {darkmode ? 'on' : 'off'}</p>
    </div>
  )
}
export default CharDetail