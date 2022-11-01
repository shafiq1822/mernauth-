// import { axiosInstance } from '../config';
import axios from 'axios'
  
const URL = 'http://localhost:8080';
  
export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/signup`,  data);
        
    }catch(error){
        console.log('Error while calling addUser Api', error);
    };
};

export const getUsers = async () => {
    try{
        return await axios.get(`${URL}`);
    }catch(error){
        console.log('Error while calling getuser api');
    }
}

export const getUser = async (id) => {
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log('Error while calling getUser api', error);
    }
}


export const editUser = async( user, id ) => {
    try{
        return await axios.put(`${URL}/${id}`, user);
    }catch(error){
        console.log('Error while calling editUser api', error);
    }
}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${URL}/${id}`)
    }catch(error){
        console.log('Error while calling deleteUser api')
    }
}