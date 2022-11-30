export const GlassCard = ( {title, description, price, stock} ) => {
  return (
    <div className="m-10">
        <div>{title}</div>
        <div>{description}</div>
        <div>{price}</div>
        <div>{stock}</div>
    </div>
  )
}