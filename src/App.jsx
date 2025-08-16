import './App.css'
import Home from './components/home/home';
import MyNavbar from './components/MyNavbar/MyNavbar';
import ProductList from './components/ProductsList/ProductsList';
import { Route, Routes } from 'react-router-dom';
import ProductView from './components/ProductView/ProductView';
import ProductForm from './components/ProductForm/ProductForm';

function App() {

  return (
    <>
      <MyNavbar/>
      <Routes>
        <Route path="/" element= {
          <Home/>
        } />
        <Route path='products' element= {
          <ProductList/>
        } />
        <Route path='products/:productId' element= {
          <ProductView/>
        } />
        <Route path='/add-product' element= {
          <ProductForm/>
        } />
        <Route path='/edit-product/:productId' element= {
          <ProductForm/>
        } />
      </Routes>
    </>
  )
}

export default App
