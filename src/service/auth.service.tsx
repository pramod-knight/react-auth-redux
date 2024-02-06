import axios, {AxiosResponse } from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL;

const register = async (email:string, password:string) => {
  try {
    let response:AxiosResponse  = await axios.post(API_URL + "register", {
      email,
      password,
    });
    let data = response.data;
    return {
      success :true,
      data:data
    }
  } catch (error:any) {
    let data = error.response?.data;
    return {
      success :false,
      data:data
    }
  }
};

const login = async (email:string, password:string) => {
  try {
    const response = await axios
    .post(API_URL + "login", {
      email,
      password,
    });
    if (response.data.token) {
      localStorage.setItem("auth", JSON.stringify(response.data));
    };
    return {
      success :true,
      data:response.data
    }
  } catch (error:any) {
    let data = error.response?.data;
    return {
      success :false,
      data:data
    }
  }
  
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;