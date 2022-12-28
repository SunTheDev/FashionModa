import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import { useState, createContext } from "react";

export const SearchContext = createContext();

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <SearchContext.Provider value={{ search, setSearch }}>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route>404 Not Found!</Route>
          </Routes>
        </SearchContext.Provider>
      </Router>
    </div>
  );
}

export default App;
