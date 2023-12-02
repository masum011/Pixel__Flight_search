import axios from 'axios';
import CryptoJS from 'crypto-js';


const hashData = (data) => {
    const secretKey = 'yourSecretKey';
    return CryptoJS.HmacSHA256(data, secretKey).toString(CryptoJS.enc.Hex);
  };


export const fetchDataFromApi = async (data) => {
  try {
    // const hashedData = hashData(JSON.stringify(postData));
    const response = await axios.post(`https://devadmin.altabooking.com/api/v2/auth/login`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchFlightData = async (data) => {
  try {
    // const hashedData = hashData(JSON.stringify(postData));
    const response = await axios.post(`https://devadmin.altabooking.com/api/v2/flight/search-flight-airport

    `,data);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchFlightListsData = async (data) => {
  try {
    // const hashedData = hashData(JSON.stringify(postData));
    const response = await axios.post(`https://devadmin.altabooking.com/api/v2/flight/flight-search-list`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
