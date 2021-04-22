import React from 'react';
class Product extends React.Component {

    constructor(props) {
        super(props);
        this.onAddButtonClick = this.onAddButtonClick.bind(this);
    }

    onAddButtonClick() {
        this.props.handleAddButtonClick(this.props.product.price);
    }

    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
            {product.name}
            </span>;

        const addButton = <button className="green-button" onClick={this.onAddButtonClick}>Add</button>;
        const disabledButton = <button className="disabled-button" disabled onClick={this.onAddButtonClick} disabled>Add</button>;
  
        return (
            <tr>
            <td>{name}</td>
            <td>{product.price} €</td>
            {product.stocked ? addButton : disabledButton}
            </tr>        
      );
    }
  }

export default Product;