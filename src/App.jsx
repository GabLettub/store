import "./App.css";
import { useState } from "react";
import FilterProductTable from "./components/FilterProductTable";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

const productList = [
  //sporting goods
  { id: 1, name: "Tennis", price: 99.9, type: 1, stock: 100 },
  { id: 2, name: "Badminton", price: 99.9, type: 1, stock: 400 },
  { id: 3, name: "Basketball", price: 99.9, type: 1, stock: 700 },

  //electronics
  { id: 4, name: "Charger", price: 67.123123, type: 2, stock: 1200 },
  { id: 5, name: "Tablet", price: 88.9, type: 2, stock: 170 },
  { id: 6, name: "Smart Phone", price: -100.9, type: 2, stock: 160 },
];

const headers = ["Sporting Goods", "Electronics"];

function App() {
  const [products, setProducts] = useState(productList);
  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) &&
      //Case 2: If it has stocks
      // !stockChecks: if the valie is false it can be considered
      // produc.stock > 0 we should render stocks that are not zero
      // || because either of the case is needed
      (!stockChecked || product.stock > 0)
  );

  return (
    <FilterProductTable>
      <SearchBar
        query={query}
        setQuery={setQuery}
        stockChecked={stockChecked}
        setStockChecked={setStockChecked}
      />
      <ProductTable
        headers={headers}
        products={filteredProducts}
        setProducts={setProducts}
      ></ProductTable>
    </FilterProductTable>
  );
}

export default App;
