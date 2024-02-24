import React from 'react'
import { CartItemsList, CartTotals, SectionTitle } from '../components'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Cart = () => {
  
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { cartItems } = useSelector((state) => state.cart);

  const isCartEmpty = () => {
    if(cartItems.length === 0){
      toast.error("Giỏ hàng rỗng");
    }else{
      navigate("/thank-you");
    }
  }

  return (
    <>
    <SectionTitle title="Giỏ hàng" path="Trang chủ | Giỏ hàng" />
    <div className='mt-8 grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto px-10'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {loginState ? (
            <button onClick={isCartEmpty} className='btn bg-blue-600 hover:bg-blue-500 text-white btn-block mt-8'>
              Mua ngay
            </button>
          ) : (
            <Link to='/login' className='btn bg-blue-600 hover:bg-blue-500 btn-block text-white mt-8'>
              Vui lòng đăng nhập
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart