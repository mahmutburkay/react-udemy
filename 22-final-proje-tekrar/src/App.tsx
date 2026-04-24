import React, { useEffect } from 'react'
import './App.css'
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './redux/store';
import type { ProductType, UserType } from './types/Types';
import ProductService from './services/ProductService';
import { setCurrentUser, setProducts } from './redux/appSlice';
import { setBasket } from './redux/basketSlice';
import BasketDetails from './components/BasketDetails';

function App() {

  const { currentUser } = useSelector((state: RootState) => state.app) // user varsa navbar ı göster 

  const dispatch = useDispatch();



  // * sayfa yenilendiğinde productları geri getirme 
  const getAllProducts = async () => {
    const products: ProductType[] = await ProductService.getAllProduct(); // userleri istek atıp getirdik redux a verdik
    dispatch(setProducts(products))
  }

  useEffect(() => {
    getAllProducts();
  }, [])


  //* user ı geri getirme 
  useEffect(() => {
    const currentUserString: string | null = localStorage.getItem("currentUser");
    if (currentUserString) {
      const currentUser: UserType = JSON.parse(currentUserString) as UserType;
      dispatch(setCurrentUser(currentUser))
    }
  }, [])


  useEffect(() => { //* sepeti geri getirme 
    const basketString: string | null = localStorage.getItem("basket");
    if (basketString) {
      const basket: ProductType[] = JSON.parse(basketString) as ProductType[];
      dispatch(setBasket(basket));
    }
  }, [])




  return (

    <div>
      {currentUser && <Navbar />}

      <RouterConfig />
      <ToastContainer autoClose={2500} style={{ fontSize: '13px' }} />
      <Spinner />
      <BasketDetails />
    </div>

  )
}

export default App
