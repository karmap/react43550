const CharCard = ( {name, species, status, image} ) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-8">
    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{species} - {status}</p>
    </div>
    <figure><img src={image} alt="Shoes" /></figure>
    </div>
  )
}
export default CharCard