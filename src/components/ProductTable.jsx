import React from "react";
import Table from "./Table";
import ProductsItem from "./students/ProductsItem";
import ProductCategoryHeader from "./students/ProductsCategoryHeader";

const ProductTable = ({ headers, products, setProducts }) => {
  const sportingGoods = products.filter((product) => product.type === 1);
  const electronics = products.filter((product) => product.type === 2);

  return (
    <div>
      <Table.TableContainer>
        <Table.Thead>
          <Table.Row>
            <Table.ColumnHeader>Last Name</Table.ColumnHeader>
            <Table.ColumnHeader>First Name</Table.ColumnHeader>
            <Table.ColumnHeader>Course</Table.ColumnHeader>
            <Table.ColumnHeader>Birthdate</Table.ColumnHeader>
            <Table.ColumnHeader>Age</Table.ColumnHeader>
          </Table.Row>
        </Table.Thead>

        <Table.TBody>
          {sportingGoods.length > 0 && (
            <ProductCategoryHeader text={headers[0]} />
          )}

          {sportingGoods.map((sportingGood) => (
            <ProductsItem
              key={`${sportingGood.type}-${sportingGood.id}`}
              value={sportingGood} // Pass the entire object as `value`
              setProducts={setProducts} //included so that  producItem can manipulate the data of productList
            />
          ))}

          {electronics.map((electronic) => (
            <ProductsItem
              key={`${electronic.type}-${electronic.id}`}
              value={electronic} // Pass the entire object as `value`
              setProducts={setProducts} //included so that  producItem can manipulate the data of productList
            />
          ))}
        </Table.TBody>

        <Table.TFoot>
          <Table.Row>
            <Table.ColumnHeader>TOTAL</Table.ColumnHeader>
            <Table.Column>
              $
              {products.reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.price,
                0
              )}
            </Table.Column>
          </Table.Row>
        </Table.TFoot>
      </Table.TableContainer>
    </div>
  );
};

export default ProductTable;
