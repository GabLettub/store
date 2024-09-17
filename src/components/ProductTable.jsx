import React from "react";
import Table from "./Table";
function ProductTable() {
  return (
    <div>
      <Table.TableContainer>
        <Table.Thead>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
          </Table.Row>
        </Table.Thead>

        <Table.TBody>
          <Table.Row>
            <Table.ColumnHeader colspan="2">Sports Goods</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.Column>Football</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
        </Table.TBody>
      </Table.TableContainer>
    </div>
  );
}

export default ProductTable;
