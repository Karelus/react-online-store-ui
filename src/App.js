import './App.css';
import Header from './components/Header';
import FilterableProductsTable from './components/FilterableProductsTable';

function App() {

  const PRODUCTS = [
    { price: 49.99, stocked: true, name: 'Sneakers'},
    { price: 9.99, stocked: true, name: 'Baseball Cap'},
    { price: 29.99, stocked: false, name: 'Hoodie'},
    { price: 69.99, stocked: true, name: 'Training Joggers'},
    { price: 19.99, stocked: false, name: 'Training Shirt'},
    { price: 29.99, stocked: true, name: 'Sweatpants'},
    { price: 25.99, stocked: true, name: 'Training Shorts'}
  ];

  return (
    <div className="container">
      <Header />
      <FilterableProductsTable products={PRODUCTS} />
    </div>
  );
}

export default App;