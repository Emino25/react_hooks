import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {data} from './Data'
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Desc from "./Components/Desc";

function App() {
  const [movie, setMovie] = useState(data)
  const HandleAdd = (newMovie) => {
    setMovie([...movie,newMovie])
  }
  const [search, setSearch] = useState("")
  const HandleSearch = (searchMovie) => {
    setSearch(searchMovie)
  }
  const [rate, setRate] = useState(0)
  return (
    <div className="App">
      <Header search={search} HandleSearch={HandleSearch} setRate={setRate} rate={rate}/>
      <Routes>
        <Route path="/" element={<Body data={movie} HandleAdd={HandleAdd} search={search} rate={rate}/>}/>
        <Route path="/Desc/:id" element={<Desc data={movie} />}/>
      </Routes>
    </div>
  );
}

export default App;
