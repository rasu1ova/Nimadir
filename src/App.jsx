import './App.css'
import { Route, Routes } from "react-router-dom";
import { Allegria, Header, Watch, Weather } from "./components";
function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/clothes" element={<Allegria />} />
          <Route path="/watch" element={<Watch/>} />
        </Routes>
    </>
  );
}

export default App;
