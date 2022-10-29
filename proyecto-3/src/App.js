import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Uf } from "./components/Uf";
import { Dolar } from "./components/Dolar";
import { Euro } from "./components/Euro";

function App() {
  return (
    <div className="App">
    
  
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="uf" element={<Uf />} />
            <Route path="dolar" element={<Dolar />} />
            <Route path="euro" element={<Euro />} />
          </Route>
        </Routes>

    </div>
  );
}

export default App;
