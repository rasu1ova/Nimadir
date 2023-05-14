
function FilterCard({ name, describe, price, category, img }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{describe}</p>
      <p>{price}</p>
      <p>{category}</p>
      <img src={img} alt="rasm bor" />
    </div>
  );
}

export default FilterCard;
