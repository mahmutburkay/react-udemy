import type { AxiosResponse } from "axios";
import axios from "../config/AxiosConfig";
import type { UserType } from "../types/Types";


class LoginPageService {

    async login(): Promise<UserType[]> {

        const response: AxiosResponse<UserType[]> = await axios.get("/users");

        return response.data;
    }
}

export default new LoginPageService();







//todo ----------- ENES HOCANIN YAPTIĞI -- ZOR OLANI --  */

// class LoginPageService {

//     login(): Promise<UserType[]> {
//         return new Promise((resolve: any, reject: any) => {
//             axios.get("/users")
//                 .then((response: AxiosResponse<any, any>) => resolve(response.data))
//                 .catch((error: any) => reject(error));
//         })
//     }
// }

// export default new LoginPageService();