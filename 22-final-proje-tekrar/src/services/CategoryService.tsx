import React from 'react'
import axios from 'axios';
import type { AxiosResponse } from "axios";
import type { ProductType } from '../types/Types';


class CategoryService {

    base_URL = "https://fakestoreapi.com";


    //*  kategorileri getirme
    getAllCategories(): Promise<string[]> {

        return new Promise((resolve: any, reject: any) => {

            axios.get(`${this.base_URL}/products/categories`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => reject(error))
        })
    }


    //* Kategoriye göre ürün getirme
    getProductByCategory(categoryname: string): Promise<ProductType[]> {
        return new Promise((resolve: any, reject: any) => {

            axios.get(`${this.base_URL}/products/category/${categoryname}`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => reject(error))
        })
    }
}

export default new CategoryService();






//? Benim yazdığım kod

// class CategoryService {

//     async getAllCategories(): Promise<string[]> {

//         const response = await axios.get<string[]>(
//             "https://fakestoreapi.com/products/categories"
//         );

//         return response.data;
//     }

// }

// export default new CategoryService();