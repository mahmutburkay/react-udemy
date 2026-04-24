import axios from "axios";

const axiosIntance = axios.create({
    baseURL: 'http://localhost:5000', //* atılan tüm isteklerde otomatik kök url adresi 
});


export default axiosIntance; // dışarı export la açtık 