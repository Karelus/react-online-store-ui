import SearchBar from './SearchBar';
import ProductContainer from './ProductContainer';

function ProductsTable() {
    return <div className="productsContainer">
                <h2>PRODUCTS</h2>
                <SearchBar />
                <ProductContainer />
            </div>
}

export default ProductsTable;