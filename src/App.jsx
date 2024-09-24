import "./App.css";
import FilterProductTable from "./components/FilterProductTable";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

const products = [
  //sporting goods
  { id: 1, name: "Tennis", price: 99.9, type: 1 },
  { id: 2, name: "Badminton", price: 99.9, type: 1 },
  { id: 3, name: "Basketball", price: 99.9, type: 1 },

  //electronics
  { id: 4, name: "Charger", price: 67.123123, type: 2 },
  { id: 5, name: "Tablet", price: 88.9, type: 2 },
  { id: 6, name: "Smart Phone", price: -100.9, type: 2 },
];

const headers = ["Sporting Goods", "Electronics"];

function App() {
  return (
    <FilterProductTable>
      <SearchBar></SearchBar>
      <ProductTable headers={headers} products={products}></ProductTable>
    </FilterProductTable>
  );
}

export default App;
