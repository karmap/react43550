import { Link } from "react-router-dom"

const CharCard = ( {id, name, species, status, image} ) => {
  return (
    <Link to={`/rick/${id}`}>
      <div className="card w-96 bg-base-100 shadow-xl m-8">
      <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{species} - {status}</p>
      </div>
      <figure><img src={image} alt="Shoes" /></figure>
      </div>
    </Link>
  )
}
export default CharCard