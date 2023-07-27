
function FilterCard(props) {
  const { name, describe, price, category, img } = props
  return (
    <div className="product__card">
      <h2>{name}</h2>
      <p>{describe}</p>
      <p>{price}</p>
      <p>{category}</p>
      <div className="card--img">
        <img src={img} alt="rasm bor" />
      </div>
    </div>
  );
}

export default FilterCard;
