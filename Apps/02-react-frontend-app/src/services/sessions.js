const axios = require('axios')

export default function getSessions(){
    return axios.get('http://workshops-server.herokuapp.com/sessions')
        .then(response => response.data)
        .catch(error => console.log(error))
}