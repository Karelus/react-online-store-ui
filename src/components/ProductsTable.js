import React from 'react';
import Product from './Product';
  
  class ProductsTable extends React.Component {

    constructor(props) {
      super(props);
      this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
    }

    handleAddButtonClick(price) {
      this.props.onAddButtonClick(price);
    }

    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
  
      this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        rows.push(
          <Product
            product={product}
            key={product.name}
            handleAddButtonClick={this.handleAddButtonClick}
          />
        );
      });
  
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table> 
        </div>
      );
    }
  }
  
export default ProductsTable;

