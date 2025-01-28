import axios from 'axios';
import { useAuth } from '../context/userContext';

let url = import.meta.env.VITE_BACKEND_URL;
export async function getUser(){


    
    try {
        let user = await axios.get(`${url}/api/auth/getuser`, {
            withCredentials : true,
        });
        return user.data.user;
    } catch (e) {
        console.log(e);
        return null;
    }
    

}

export async function getAllUser(){

    
    try {
        let users = await axios.get(`${url}/api/users`, {
            withCredentials : true,
        });
        return users.data;
    } catch (e) {
        console.log(e);
        return null;
    }

}

export async function registerUser(data){

    console.log(data);
    try {
        let user = await axios.post(`${url}/api/auth/register`,data, {
            withCredentials : true,
        });

        return user?.data?.user;
    } catch (e) {
        console.log(e);
        return null;
    }

}

export async function loginUser(data){
    
    console.log(data);
    try {
        let user = await axios.post(`${url}/api/auth/login`, data,{
            withCredentials : true,    
        });
        
		console.log(user);
        return user.data.user;
    } catch (e) {
        console.log(e?.message);
        return null;
    }

}

export async function logoutUser(){
    
    
    try {
        let user = await axios.get(`${url}/api/auth/logout`, {
            withCredentials : true
        });
        console.log("logout success", user)
        localStorage.removeItem("chat-user");
        
    } catch (e) {
        console.log(e?.message);
        return null;
    }

}
export async function updateCredits(qty, sign,coupon){
    
    //if sign 0 then reduce else increase.

 
    try {
        let res = await axios.post(`${url}/api/user/update-credits`, {qty,sign,coupon},{
            withCredentials : true,    
        });
        
		console.log(res);
        // return user.data.user;
    } catch (e) {
        console.log(e?.message);
        return null;
    }

}

export async function initiatePayment(amount){

    
    //if sign 0 then reduce else increase.

 
    try {
      
        const response = await fetch(`${url}/api/payment/${'Stripe'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });
  
      const data = await response.json();
      if (data.url) window.location.href = data.url;

    } catch (e) {
        console.log(e?.message);
        return null;
    }

}

export async function forgotPassword(email){

    try {
      
        const response = await axios.post(`${url}/api/user/forgot-password`,{email}, {
            withCredentials : true,
        });
  
    //   const data = await response.json();
        
      console.log(response);
      return response?.data?.otp;

    } catch (e) {
        console.log(e?.message);
        return null;
    }

}



