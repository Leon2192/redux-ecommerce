
import './App.css'
import FilteredProducts from './components/FilteredProducts/FilteredProducts'
import Main from './components/Main/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleProduct from './components/FilteredProducts/SingleProduct'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/filteredProducts/:id' element={<FilteredProducts />} />
          <Route path='/filteredProducts/:id/:id' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
