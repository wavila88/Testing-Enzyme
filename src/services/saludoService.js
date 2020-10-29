import axios from 'axios';


const getSaludo = async () =>{

return await axios.get('http://localhost:8084/Testing/webresources/producto')
  
    .then(async response => {
        
 return  response.data;
    })
    .catch(e => {
       console.log('Error',e)
    })
    };
export {getSaludo};