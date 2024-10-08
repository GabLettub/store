import React, {useState} from "react";
import Table from "../Table";

const ProductsItem = (props) => {
  const { value, setProducts } = props;
  const [number, setNumber] = useState(1);


  const stockAction = (e) => {
    const operation = e.target.textContent;
    const productId = value.id;

    if (value.stock - number < 0 && operation === "-") {
      alert(`${value.name} stock should't be less than zero`);
      return;
    }

    setProducts((prevValue) => {
      const products = prevValue;

      //Manipulate the stocks immutably
      let stock = value.stock;

      if (operation === "+") {
        stock += +number;
      } else if (operation === "-") {
        stock -= number;
      }
      
      return products.map ((product) => 
        product.id === productId ? { ...product, stock } : product
      );
    }); 
    
  };



  //const handleChange = (e) => setNumber(e.target.value) //only do this if you want use handleChange to input

  return (
    <Table.Row>
      <Table.Column>
        <span style={{ textDecoration: value.stock === 0 ? "line-through" : "none" }}>
          {value.name}
        </span>
      </Table.Column>
      <Table.Column>
        ${value.price > 0 ? value.price.toFixed(2) : 0}
      </Table.Column>
      <Table.Column>
        {value.stock}
      </Table.Column>
      <Table.Column>
        <button onClick={stockAction}>-</button> 
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
        <button onClick={stockAction}>+</button>
      </Table.Column>
    </Table.Row>
  );
};

export default ProductsItem;
