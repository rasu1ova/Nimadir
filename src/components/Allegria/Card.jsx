
function Card(props) {
    const {id, name, image, description, price, color, size, material } = props
  return (
    <div className='product__card' key={id}>
        <div className="card--img">
            <img src={image} alt={`${name} img`} />
        </div>
        <div className="row">
            <h2 className="card--title">{name}</h2>
            <p className="card--price">{price}</p>
        </div>
        <div className="row">
            <p>{color}</p>
            <p>{material}</p>
        </div>
        <p>{description}</p>
        <p>{size}</p>
    </div>
  )
}

export default Card