import "./App.css";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import FilterProductTable from "./components/FilterProductTable";
=======
import { useState } from "react";
import FilterProductTable from "./components/FilterStudentTable";
import ProductTable from "./components/StudentTable";
>>>>>>> 8ebecd1af999e80ae88e908d7b4ceb62be1ed12f
import SearchBar from "./components/SearchBar";
import { parse, differenceInYears } from 'date-fns';

<<<<<<< HEAD
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Set to true initially
=======

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



// New array data for Student Management System
const studentList = [
  { id: 1, lastName: "Stark", firstName: "Tony", course: "IT", birthdate: "2003/04/22" },
  { id: 2, lastName: "Rogers", firstName: "Steve", course: "IS", birthdate: "2004/11/20" },
  { id: 3, lastName: "Banner", firstName: "Bruce", course: "CS", birthdate: "2005/10/19" },
  { id: 4, lastName: "Banner", firstName: "Bruce", course: "DS", birthdate: "2006/09/18" },
];

// Function to calculate age
const calculateAge = (birthdate) => {
  const birthDate = parse(birthdate, 'yyyy/MM/dd', new Date());
  return differenceInYears(new Date(), birthDate);
};

// Adding age to studentList
const updatedStudentList = studentList.map(student => ({
  ...student,
  age: calculateAge(student.birthdate),
}));

console.log(updatedStudentList);

const headers = ["Sporting Goods", "Electronics"];

function App() {
  const [products, setProducts] = useState(productList);
>>>>>>> 8ebecd1af999e80ae88e908d7b4ceb62be1ed12f
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
<<<<<<< HEAD
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
=======
      <ProductTable
        headers={headers}
        products={filteredProducts}
        setProducts={setProducts}
      ></ProductTable>
>>>>>>> 8ebecd1af999e80ae88e908d7b4ceb62be1ed12f
    </FilterProductTable>
  );
}

export default App;
