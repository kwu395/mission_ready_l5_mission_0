import './App.css'
import NavBar from './components/NavBar.jsx';
import SearchBar from './components/SearchBar.jsx';
import Product from './components/Product.jsx';

function App() {
  const products = [
    { name: 'IPhone15' },
    { name: 'IPhone15Plus'},
    { name: 'IPhone15Pro'},
    { name: 'IPhone15ProMax'},
  ]

  return (
    <>
      <NavBar/>
      <SearchBar/>
      <Product products = {products}/>
    </>
  )
}

export default App
