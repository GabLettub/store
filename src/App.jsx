import "./App.css";
import { useState, useEffect } from "react";
import FilterProductTable from "./components/FilterProductTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Set to true initially
  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) && // Use title instead of name
      (!stockChecked || product.stock > 0)
  );

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
    </FilterProductTable>
  );
}

export default App;
