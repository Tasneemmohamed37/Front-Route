import axios from "axios";
import { createContext, useContext, useState } from "react";
import { userContext } from "./User.Context";
import toast from "react-hot-toast";

export const cartContext = createContext(null);

export default function CartProvider({ children }) {

    const {token} = useContext(userContext);
    const [cartInfo, setCartInfo] = useState(null)

    async function getCart(){
        try {
            const options = {
                method: 'GET',
                url: 'https://ecommerce.routemisr.com/api/v1/cart',
                headers : {
                    token
                }
            }
            const {data} = await axios.request(options)
            setCartInfo(data.data)
            // return data
        } catch (error) {
            console.log(error)
        }
    }


    async function addToCart(prdId) {
        try {
            const options ={
                method: 'POST',
                url: 'https://ecommerce.routemisr.com/api/v1/cart',
                headers : {
                    token
                },
                data:{
                    productId : prdId
                }
            }
            const {data} = await axios.request(options);
            if(data.status == 'success'){
                const successToastMsg = toast.success(data.message)
                setTimeout(() => {
                    toast.dismiss(successToastMsg)
                    }, 2000);
            }
            else{
                const failedToastMsg = toast.error(data.message)
                setTimeout(() => {
                    toast.dismiss(failedToastMsg)
                    }, 2000);
            }
            
        } catch (error) {
            console.log(error)
        }

    }

    return <cartContext.Provider value={{ addToCart, getCart, cartInfo}}>
        {children}
    </cartContext.Provider>
}