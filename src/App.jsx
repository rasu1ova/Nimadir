import Allegria from "./components/Allegria/Allegria";
import './App.css'
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header/>

        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/clothes" element={<Allegria />} />
        </Routes>

    </>
  );
}

export default App;
