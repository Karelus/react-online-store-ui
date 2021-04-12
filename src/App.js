import './App.css';
import Header from './components/Header';
import ProductsTable from './components/ProductsTable';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="container">
      <Header />
      <ProductsTable />
      <ShoppingCart />
    </div>
  );
}

export default App;
