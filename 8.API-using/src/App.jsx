import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

//todo ASYNC AWAİT KULLANIP SENKRONA ÇEVİRMEK ZORUNDASINN!!!!


const Base_URL = "http://localhost:3005"

function App() {

  //todo------ senkrona çevir------ tüm usersları getir ----GET-------
  const getAllUsers = async () => {
    const response = await axios.get(Base_URL + "/users");
    console.log(response.data);
  }

  getAllUsers();

  //**************************************************************************************************/

  //todo ------ ID si 1 olan userı getir ----GET-------
  const getUserById = async (userId) => {
    const response = await axios.get(Base_URL + "/users/" + userId); // axios.get(`${BASE_URL}/users/${userId}`); literal template te kullanarak yazdırabilirsin
    console.log(response.data);
  }

  getUserById(1);

  //**************************************************************************************************/


  //todo ------ yeni user oluşturma  --POST---- 
  const createUser = async (newUser) => {
    const response = await axios.post(`${Base_URL}/users`, newUser);
    console.log("response", response.data);
  }

  //**************************************************************************************************/  


  //todo ------  user güncelleme  --PUT--
  const updateUser = async (userId, updatedUser) => {
    const guncel = await axios.put(`${Base_URL}/users/${userId}`, updatedUser);
    console.log("user güncellendi..", guncel.data);
  }

  //**************************************************************************************************/


  //todo ------  user silme  --DELETE--
  const deleteUserById = async (userId) => {
    await axios.delete(`${Base_URL}/users/${userId}`);
  }

  //**************************************************************************************************/





  //todo ******************* ASENKRON ÖRNEĞİ *******************************

  // const getUserById = async (userId) => { // id si şu olanı getir
  //   const response = await axios.get(Base_URL + "/users/" + userId);
  //   return response.data.postId;
  // }

  // const getPostById = async (postId) => {// post ıd si şu olanı getir
  //   const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId)
  //   return response.data;
  // }

  // const getPost = async () => {
  //   const postId = await getUserById(1);
  //   const postData = await getPostById(postId);
  //   console.log(postData)

  // }







  // useEffect(() => { //sayfa açıldığında çalışır 

  // getAllUsers(); // tüm userları getir 
  // getUserById(1) // id si 1 olanı getir. 

  // todo yeni user ekleme
  // const newUser = { // id otomatik oluşuyor vermeye gerek yok
  //   "username": "Mahsun",
  //   "password": "Mahsun47"
  // }
  // createUser(newUser)

  // todo user güncelleme
  // updateUser("c55f",
  //   {
  //     "username": "Mahsun Barak ",
  //     "password": "474747"
  //   });

  //   // USER SİLME 
  // deleteUserById("c55f");

  // getPost();




  // }, [])


  return (
    <div>

    </div>
  )
}

export default App
