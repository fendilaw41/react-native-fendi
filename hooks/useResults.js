import { useState, useEffect } from 'react';
import axios from 'axios';
export default () => {
  const [data, setData] = useState([]);
  // #2 fungsi untuk ambil data dengan get
const getDataFromApi = async () => {
  const url = 'https://reqres.in/api/users?page=1';
  axios.get(url, {
    headers: {
    'Accept' : 'application/json'
    }
   })
   .then(res => setData(res.data.data))
   .catch(err => console.log(err))
  };
  
  //  #3 data ambil dari sebelumnya otomatis dijalakan
  useEffect(() => {
    getDataFromApi('');
  }, []);

  return [data, setData]
}