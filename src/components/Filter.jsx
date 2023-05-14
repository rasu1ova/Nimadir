import { useState, useEffect } from "react";
import FilterCard from "./FilterCard";

function Filter() {
  const [furnitureData, setFurnitureData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setIsLoading(true);
    fetch("https://my-json-server.typicode.com/anvarortiqov/mebel/mebel")
      .then((response) => response.json())
      .then((data) => {
        setFurnitureData(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCategoryFilter = (category) => {
    setCurrentCategory(category);
  };
  const handleAllButtonClick = () => {
    setCurrentCategory("");
  };
  useEffect(() => {
    const filteredFurniture = currentCategory
      ? furnitureData.filter(
          (furniture) => furniture.category === currentCategory
        )
      : furnitureData;
    const filterPrice = filteredFurniture.filter((item) => {
      return item.price > minPrice && item.price < maxPrice;
    });

    setFilterData(filterPrice);
  }, [minPrice, maxPrice, currentCategory]);
  useEffect(() => {
    const searchData = furnitureData.filter((item) => {
      return item.name.includes(search);
    });
    setFilterData(searchData);
  }, [search]);
  return (
    <div className="container">
      <div>
        <button
          className="btn-cat"
          onClick={() => handleCategoryFilter("chair")}>
          Chair
        </button>
        <button
          className="btn-cat"
          onClick={() => handleCategoryFilter("sofa")}>
          Sofa
        </button>
        <button
          className="btn-cat"
          onClick={() => handleCategoryFilter("table")}>
          Table
        </button>
        <button className="btn-cat" onClick={() => handleCategoryFilter("bed")}>
          Bed
        </button>
        <button
          className="btn-cat"
          onClick={() => handleCategoryFilter("wardrobe")}>
          Wardrobe
        </button>
        <button
          className="btn-cat"
          onClick={() => handleCategoryFilter("almirah")}>
          Almirah
        </button>
        <button
          className="btn-cat"
          onClick={() => handleCategoryFilter("dimple")}>
          Dimple
        </button>
        <button
          className="btn-cat"
          onClick={() => handleCategoryFilter("rack")}>
          Rack
        </button>
        <button
          className="btn-cat"
          onClick={() => handleCategoryFilter("stand")}>
          Stand
        </button>
        <button className="btn-cat" onClick={handleAllButtonClick}>
          All
        </button>
      </div>
      <div>
        <label htmlFor="min">Min</label>
        <input
          type="number"
          id="min"
          value={minPrice}
          onChange={(e) => {
            setMinPrice(e.target.value);
          }}
        />
        <label htmlFor="max">Max</label>
        <input
          type="number"
          id="max"
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="search">Qidirish</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isLoading && <p>Loading...</p>}

      <div id="mebel-list" className="mebel-list container">
        {filterData &&
          filterData.map((mebel) => (
            <FilterCard
              key={mebel.name}
              name={mebel.name}
              describe={mebel.description}
              img={mebel.image}
              price={mebel.price}
              category={mebel.category}
            />
          ))}
      </div>
    </div>
  );
}

export default Filter;
