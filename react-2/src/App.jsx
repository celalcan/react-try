import { useEffect} from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL ="http://localhost:3005";

function App() {

const getAllUsers=async()=>{
 const response =  await axios.get(BASE_URL+"/users");
  console.log(response.data)
}

const getUserById = async(userId)=>{
 const response = await axios.get(BASE_URL+"/users/"+userId)
 console.log(response.data)
}

const createUser = async(newUser)=>{
const response = await axios.post(`${BASE_URL}/users`,newUser)
console.log("response", response.data)
}

const updateUser = async(userId,updateUser) => {
  // `` bu işareti yapabilmek için AltGr + virgüle iki kere basılır
  await axios.put(`${BASE_URL}/users/${userId}`,updateUser)
}

const deleteUserById = async (userId)=>
{
 const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
 console.log(deletedResponse.data)
}

useEffect(()=>{
  deleteUserById("2")
  // getAllUsers
  // getUserById(1);
  // const newUser = {
  //   "username" : "celalcan",
  //   "password" : "4357"
  // }
  // createUser(newUser);
  // updateUser("c397", {
  //   "username" : "gülcan",
  //   "password" : "334"
  // })

},[])


 }

export default App
