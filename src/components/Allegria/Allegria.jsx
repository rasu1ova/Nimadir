import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { fetchMyData } from "../../redux/getActions";

function Allegria() {
  const [clothes, setClothes] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [colors, setColors] = useState([]);
  const [material, setMaterial] = useState([]);
  const [currMaterial, setCurrMaterial] = useState("");
  const [currColors, setCurrColors] = useState("");
  const [currSize, setCurrSize] = useState([]);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(200);

  const colorArray = new Set();
  const materialArray = new Set();
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.clothesData.data);
  const isLoading = useSelector((state) => state.clothesData.status);
  useEffect(() => {
    dispatch(fetchMyData());

  }, [dispatch]);
  useEffect(() => {
    setClothes(myData);
    setFilterData(myData);
  }, [myData]);
  const handleAllButtonClick = () => {
    setFilterData(clothes);
  };
  useEffect(() => {
    clothes.map((option) => {
      colorArray.add(option.color);
      materialArray.add(option.material);
      setColors([...colorArray]);

      setMaterial([...materialArray]);
    });
  }, [clothes]);

  useEffect(() => {
    const filterColors = currColors
      ? clothes.filter((dataColor) => dataColor.color === currColors)
      : clothes;
    setFilterData(filterColors);
  }, [currColors]);

  useEffect(() => {
    const filterMaterial = currMaterial
      ? clothes.filter((dataMaterial) => dataMaterial.material === currMaterial)
      : clothes;
    setFilterData(filterMaterial);
  }, [currMaterial]);

  useEffect(() => {
    const filterSize =
      currSize.length >= 1
        ? clothes.filter((item) =>
            item.size.some((size) => currSize.includes(size))
          )
        : clothes;
    setFilterData(filterSize);
  }, [currSize]);
  useEffect(() => {
    const filterPrice =
      fromPrice < toPrice
        ? clothes.filter(
            (item) => fromPrice < item.price && item.price < toPrice
          )
        : clothes;
    setFilterData(filterPrice);
  }, [fromPrice, toPrice]);

  const handleSizeChange = (e) => {
    const { value } = e.target;
    if (currSize.includes(value)) {
      setCurrSize(currSize.filter((size) => size !== value));
    } else {
      setCurrSize([...currSize, value]);
    }
  };

  return (
    <div className="container home">
      { isLoading === 'loading'? <h2>Loading...</h2> : ''}
      <div className="product-list">
        {filterData &&
          filterData.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.img}
              color={item.color}
              material={item.material}
            />
          ))}
      </div>
      <aside>
        <div className="col">
          <button onClick={handleAllButtonClick}>All</button>
        </div>
        <div className="col">
          <h2>Size:</h2>
          <div className="row--start">
            <label className="checkboxes">
              <input
                type="checkbox"
                name="checkbox"
                value="S"
                id="checkboxes"
                onChange={handleSizeChange}
                checked={currSize.includes("S")}
              />
              S
            </label>
            <label className="checkboxes">
              <input
                type="checkbox"
                name="checkbox"
                value="M"
                id="checkboxes"
                onChange={handleSizeChange}
                checked={currSize.includes("M")}
              />
              M
            </label>
          </div>
          <div className="row--start">
            <label className="checkboxes">
              <input
                type="checkbox"
                name="checkbox"
                value="L"
                id="checkboxes"
                onChange={handleSizeChange}
                checked={currSize.includes("L")}
              />
              L
            </label>
            <label className="checkboxes">
              <input
                type="checkbox"
                name="checkbox"
                value="XL"
                id="checkboxes"
                onChange={handleSizeChange}
                checked={currSize.includes("XL")}
              />
              XL
            </label>
          </div>
        </div>
        <div className="row--start">
          <div className="col">
            From
            <input
              type="number"
              name=""
              className="price"
              value={fromPrice}
              onChange={(e) => {
                setFromPrice(Number(e.target.value));
              }}
            />
          </div>
          <div className="col">
            To
            <input
              type="number"
              name=""
              className="price"
              value={toPrice}
              onChange={(e) => {
                setToPrice(Number(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="row--start">
          <div className="col">
            <h2>Color:</h2>
            <select
              onChange={(e) => {
                setCurrColors(e.target.value);
              }}>
              {colors &&
                colors.map((items) => {
                  return (
                    <option key={items} value={items}>
                      {items}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="col">
            <h2>Material:</h2>
            <select
              onChange={(e) => {
                setCurrMaterial(e.target.value);
              }}>
              {material &&
                material.map((items) => {
                  return (
                    <option key={items} value={items}>
                      {items}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Allegria;
