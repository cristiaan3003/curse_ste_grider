import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://api.unsplash.com' ,
        headers: {
            Authorization: 'Client-ID fE32I_b5LZuwgt5FYHoxD7JgYVm_cij9wxB_HFcsuDk'
        } 
    }
);