import axios from "axios"
import { SHOP_PRODUCTS } from "../../Firebase/API_URL";
import { setProducts } from "../Reducer/productReducer";
/* -------------------------------------------------------------------------- */
/*                             FETCH STORE PRODUCT                            */
/* -------------------------------------------------------------------------- */
export const fetchStoreProduct = () => {
    return async (dispatch, getState) => {
        try {
            const { data: productData } = await axios.get(`${SHOP_PRODUCTS}.json`)
            dispatch(setProducts(productData))
        } catch (error) {
            console.log(error);
        }
    }
}