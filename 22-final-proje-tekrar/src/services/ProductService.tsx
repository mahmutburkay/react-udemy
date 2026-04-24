import type { AxiosResponse } from "axios";
import type { ProductType } from "../types/Types";
import axios from "axios";


//todo ----------- ENES HOCANIN YAPTIĞI -- ZOR OLANI --  */

class ProductService { //* tüm ürünleri çekme 

    BASE_URL = "https://fakestoreapi.com";

    getAllProduct(): Promise<ProductType[]> {//* tüm ürünleri çekme 
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/products`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => reject(error))
        })
    }



    getProductById(productId: number): Promise<ProductType> { // ıd si şu olan ürünü çekme
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/products/${productId}`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => reject(error))
        })
    }


}


export default new ProductService();



//!   benim yaptığım

// class ProductService {
//     async getAllProduct(): Promise<ProductType[]> {

//         const response: AxiosResponse<ProductType[]> = await axios.get("https://fakestoreapi.com/products");

//         return response.data;
//     }
// }


// export default new ProductService();