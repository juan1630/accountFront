import axios from 'axios';


  const ApiRequest =  axios.create({
        baseURL:"http://localhost:3001"
    });

export default ApiRequest;