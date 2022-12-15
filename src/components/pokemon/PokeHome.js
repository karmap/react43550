import { Link } from "react-router-dom"

const PokeHome = () => {
  return (
    <div className="m-10">
      <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">PokeHome</h1>
      <Link to='/pokemon/lista'>Ver todos los pokemons</Link>
    </div>
  )
}
export default PokeHome