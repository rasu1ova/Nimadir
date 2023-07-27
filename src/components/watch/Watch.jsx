import React, { useEffect, useState } from "react";

function Watch() {
  const [time, setTime] = useState(new Date());
  const [copy, setCopy] = useState([]);

  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let currHour = hour < 10 ? "0" + hour : hour;
  let currMin = min < 10 ? "0" + min : min;
  let currSec = sec < 10 ? "0" + sec : sec;
  let currTime = `${currHour}:${currMin}:${currSec}`;

  //   copy = JSON.parse(localStorage.getItem("copyItems"));
  //   const copyItems = JSON.stringify([...copy, { name: "new item" }]);
  //   localStorage.setItem("myItems", copyItems);

  setInterval(() => {
    setTime(new Date());
  }, 1000);
  function handleCopy() {
    setCopy((prevCopy) => [...prevCopy, currTime]);
  }
  function handleDelCopy(index) {
    setCopy(prevCopy => prevCopy.filter((_, i) =>i !== index))
  }
  return (
    <section className="">
      <div className="row time">
        <div>
          <p className="card">{hour < 10 ? "0" + hour : hour}</p> <br />
          <p>hour</p>
        </div>
        <div>
          <p className="card">{min < 10 ? "0" + min : min}</p> <br />
          <p>min</p>
        </div>
        <div>
          <p className="card">{sec < 10 ? "0" + sec : sec}</p> <br />
          <p>sec</p>
        </div>
      </div>
      <div className="container">
        <div className="right">
          <button className="time--btn" onClick={handleCopy}>
            Copy
          </button>
        </div>
        <ul className="flexing">
          {copy.map((item, index) => (
            <li className="card row" key={index}>
              <span>{item}</span>
              <button onClick={() => handleDelCopy(index)} className="del--btn">
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Watch;
