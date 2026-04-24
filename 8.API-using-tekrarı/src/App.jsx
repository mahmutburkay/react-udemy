import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


const Base_URL = "http://localhost:3005";

function App() {


  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------

  //?---------------------- 1- VERİ ÇEKME ( GET İSTEĞİ )-------------------------------------------
  //TODO =>  axios.get(url)

  ///***************************** GET ile Tüm veriyi çekme **************************************

  const getAllUsers = async () => {
    const response = await axios.get(Base_URL + "/users");
    console.log(response.data);
  }

  useEffect(() => {
    getAllUsers();
  }, [])  // sayfa ilk çalıştığında çalışsın 


  ///***************************** ID si 1 olanı getirme *****************************************

  // const getUserByID = async (userId) => {
  //   const response = await axios.get(Base_URL + "/users/" + userId);
  //   console.log(response.data);
  // }

  // getUserByID(1);








  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------

  //?----------------------- 2- YENİ VERİ KAYDETME ( POST İSTEĞİ )---------------------------------
  //TODO =>  axios.post(url,newUser)

  const createUser = async (newUser) => {
    const response = await axios.post(Base_URL + "/users", newUser);
    console.log("response = ", response.data);
  }

  const newUser = {
    "id": "7",
    "username": "ronaldo",
    "password": "4747"
  }

  // createUser(newUser);







  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------

  //?----------------------- 3- VERİ GÜNCELLEME ( PUT İSTEĞİ )-------------------------------------
  //TODO =>  axios.put(url,updatedUser)

  const updateUser = async (userId, updatedUser) => {
    await axios.put(Base_URL + "/users/" + userId, updatedUser);

  }

  const updatedUser = {
    "username": "mahsun",
    "password": "4772"
  }

  // updateUser("7", updatedUser);














  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------

  //?----------------------- 4- VERİ SİLME ( DELETE İSTEĞİ )---------------------------------------
  //TODO =>  axios.delete(url)

  const deleteUserById = async (userId) => {
    const response = await axios.delete(Base_URL + "/users/" + userId);
    console.log("silinen data = ", response.data);

  }

  // deleteUserById("7");












  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------
  //?----------------------------------------------------------------------------------------------
  //todo ******************************** ASENKRON ÖRNEĞİ *****************************************


  const getUserById = async (userId) => { // id si şu olanı getir
    const response = await axios.get(Base_URL + "/users/" + userId);
    return response.data.postId; // data nın içindeki postId yi yakala
  }

  const getPostById = async (postId) => {// post ıd si şu olanı getir
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId)
    return response.data;
  }

  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postId, postData)

  }


  useEffect(() => {
    getPost();
  }, [])




























  return (
    <div>

    </div>
  )
}

export default App
