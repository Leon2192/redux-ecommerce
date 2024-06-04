
import './App.css'
import FilteredProducts from './components/FilteredProducts/FilteredProducts'
import Main from './components/Main/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleProduct from './components/FilteredProducts/SingleProduct'
import { useSelector } from 'react-redux' 
import Login from './components/Login/Login'
import { SnackbarProvider } from 'notistack'

function App() {

  const user = useSelector((state) => state.user.user)
  const {authUser} = user
  console.log("user", user)
  console.log("authuser", authUser)

  return (
    <>
      <BrowserRouter>
      <SnackbarProvider 
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
     />
        <Routes>
          {/* <Route path='/' 
          element={authUser ? <Main /> : <Login />} /> */}
           <Route path='/' element={<Main />} />
          <Route path='/filteredProducts/:id' element={<FilteredProducts />} />
          <Route path='/filteredProducts/:id/:id' element={<SingleProduct />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
