import axios from "../config/AxiosConfig";
import type { AxiosResponse } from "axios";
import type { UserType } from '../types/Types';


class RegisterPageService {

    async register(newUser: UserType): Promise<UserType> {

        const response: AxiosResponse<UserType> = await axios.post("/users", newUser);

        return response.data;
    }
}
export default new RegisterPageService();  // class ı dışarıya açtık 




//todo ----------- ENES HOCANIN YAPTIĞI -- ZOR OLANI --  */

// class RegisterPageService {

//     register(newUser: UserType): Promise<any> {
//         return new Promise((resolve: any, reject: any) => {
//             axios.post("/users", newUser)
//                 .then((response: AxiosResponse<any, any>) => resolve(response.data))
//                 .catch((error: any) => reject(error));
//         })
//     }
// }

// export default new RegisterPageService();  // class ı dışarıya açtık







//* isteği yakalamanın basit hali (typscript olmadan hali)

// .then(response => resolve(response.data))
// .catch(error => reject(error))
