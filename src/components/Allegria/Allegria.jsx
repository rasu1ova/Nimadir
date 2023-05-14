import { useEffect, useState } from "react";
import Card from "./Card";

function Allegria() {
  //   const [loading, setLoading] = useState(false);
  const [clothes, setClothes] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [colors, setColors] = useState([]);
  const [material, setMaterial] = useState([]);
  const [currMaterial, setCurrMaterial] = useState("");
  const [currSize, setCurrSize] = useState([]);

  const colorArray = new Set();
  const materialArray = new Set();
  useEffect(() => {
    // setLoading(true);
    fetch("https://my-json-server.typicode.com/rasu1ova/Server/clothes")
      .then((response) => response.json())
      .then((data) => {
        setClothes(data);
        setFilterData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    clothes.map((option) => {
      colorArray.add(option.color);
      materialArray.add(option.material);
      setColors([...colorArray]);
      setMaterial([...materialArray]);
    });
  }, [clothes]);
  useEffect(() => {
    const filterMaterial = currMaterial
      ? clothes.filter((dataMaterial) => dataMaterial.material === currMaterial)
      : clothes;
   
    setFilterData(filterMaterial);

  }, [currMaterial]);

  useEffect(() => {
    const filterSize = currSize
    ? filterData.filter((dataSize) => {
        return currSize.map((items) => {
          console.log(dataSize.size.includes(items));
          return dataSize.size.includes(items);
        });
      })
    : filterData;
    setFilterData(filterSize);
  }, [currSize]);
  console.log(filterData);
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
      <aside>
        <div className="">
          <div className="col">
            <h2>Color:</h2>
            <select>
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
          <div className="col">
            <h2>Size:</h2>
            <label className="checkboxes">
              <input
                type="checkbox"
                name="checkbox"
                value="X"
                id="checkboxes"
                onChange={handleSizeChange}
                checked={currSize.includes("X")}
              />
              X
            </label>
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
      </aside>

      <div className="mebel-list">
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
    </div>
  );
}

export default Allegria;
