import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { cartContext } from '../../context/Cart.Context'
import Loading from '../../components/loading/Loading';


export default function Cart() {

    const { getCart, cartInfo } = useContext(cartContext);

    useEffect(() => {
        getCart()
    })

    return (
        <>
            {!cartInfo ? <Loading /> :
                <section className='bg-slate-100 p-5'>
                    <h2>
                        <span className='text-black font-semibold'>Shop Cart </span>
                        <i className="fa-solid fa-cart-shopping "></i>
                    </h2>
                    {
                        cartInfo.length == 0 ? 
                        <div className='flex flex-col gap-3 justify-center items-center my-14'>
                        <p>there is are items yet!</p>
                        <NavLink to={'/products'} className='btn-primary'>add your first product to cart</NavLink>
                    </div>
                    :
                    <div>
                        items
                    </div>
                    }
                </section>
            }

        </>
    )
}
