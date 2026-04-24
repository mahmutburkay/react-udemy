import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Header from './components/Header';
import Loading from './components/Loading';
import RouterConfig from './config/RouterConfig';
import PageContainer from './container/pageContainer';
import { Drawer } from '@mui/material';
import { calculateBasket, setDrawer } from './redux/slices/basketSlice';
import { useEffect } from 'react';


function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(calculateBasket());

  }, [])

  return (
    <div>
      <PageContainer>

        <Header />
        <RouterConfig />
        <Loading />
        <Drawer open={drawer} anchor='right' onClose={() => dispatch(setDrawer())}>
          {

            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '20px' }}>
                    <img style={{ marginRight: '20px' }} src={product.image} width={50} height={50} />
                    <p style={{ width: '320px', marginRight: '5px' }}>{product.title} ({product.count} ) </p>
                    <p style={{ fontWeight: 'bold', marginRight: '10px' }}>{product.price} TL</p>
                    <button style={{ padding: '5px', border: 'none', borderRadius: '5px', backgroundColor: 'rgb(185, 76, 76)', color: '#fff' }}>Sil</button>
                  </div>
                </div>
              )
            })
          }

          <div>
            <p> Toplam Tutar : {totalAmount} TL </p>
          </div>

        </Drawer>

      </PageContainer>
    </div >
  )
}

export default App
