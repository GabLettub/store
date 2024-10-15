import "./App.css";

import { useState, useEffect } from "react";
import FilterProductTable from "./components/FilterProductTable";

import { useState } from "react";
import FilterProductTable from "./components/FilterProductTable";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import { parse, differenceInYears } from 'date-fns';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Set to true initially

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


  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after the fetch is done
      }
    };
    getProducts();
  }, []);

  return (
    <FilterProductTable>
      <SearchBar
        query={query}
        setQuery={setQuery}
        stockChecked={stockChecked}
        setStockChecked={setStockChecked}
      />
      {!loading ? (
        <div className="flex flex-col gap-4">
          {filteredProducts.map(
            (
              product // Use filteredProducts here
            ) => (
              <span key={product.id}>{product.title}</span>
            )
          )}
        </div>
      ) : (
        <span>Loading...</span>
      )}
      <ProductTable
        headers={headers}
        products={filteredProducts}
        setProducts={setProducts}
      ></ProductTable>
    </FilterProductTable>
  );
}

export default App;
