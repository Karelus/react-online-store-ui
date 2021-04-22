import React from 'react';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

class FilterableProductsTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false,
        totalAmount: 0.0
      };

      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
      this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
      this.handleEmptyButtonClick = this.handleEmptyButtonClick.bind(this);
    }

    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      });
    }

    handleAddButtonClick(price) {

      let totalAmount = parseFloat(this.state.totalAmount);
      totalAmount += price;
      totalAmount = Math.round(totalAmount * 100) / 100
      this.setState({
        totalAmount: totalAmount
      });
    }

    handleEmptyButtonClick() {
      let totalAmount = 0.0;
      this.setState({
        totalAmount: totalAmount
      });
    }

    renderCartButton() {
      if (this.state.totalAmount > 0) {
        return <button className="red-button" onClick={this.handleEmptyButtonClick}>Empty Cart</button>;
      }
      return null;
    }
  
    render() {
      return (
        <div className="productContainer">
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductsTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onAddButtonClick={this.handleAddButtonClick}
          />
          <p>Total amount: {this.state.totalAmount} €</p>
          { this.renderCartButton() }     
        </div>
      );
    }
  }

export default FilterableProductsTable;