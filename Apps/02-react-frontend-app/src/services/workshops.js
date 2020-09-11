import axios from 'axios'
//promise is unfulfilled => resolved | rejected state
const getWorkshops = () => {
    return axios.get(`http://workshops-server.herokuapp.com/workshops`)
    .then( response => response.data)
    

    //result will be response.data
    // .then((result) => {
    //     console.log(`second resolve handle, result ${result}`)
    //     return
    // })
}

const getWorkshopById = ( id ) => {
    return axios.get(`http://workshops-server.herokuapp.com/workshops/${id}`).then(response => response.data)
}

const getSessionsList = ( id ) => {
    return axios.get(`http://workshops-server.herokuapp.com/workshops/${id}/sessions`).then(response => response.data)
}
const addSession = (id, session) => {
    const sessionWithId = {
        ...session,
        workshopId: +id,
        sequenceId: +session.sequenceId,
        duration: +session.duration,
        upvoteCount: +session.upvoteCount
    }
    return axios.post(`http://workshops-server.herokuapp.com/sessions`,
        sessionWithId,
        {
            headers: {
                "Content-Type":"application/json"
            }
        }
    ).then(response => {
        console.log(response.data)
        return response.data})
    .catch(error => console.log(error))
}
export {
    getWorkshops,
    getWorkshopById,
    getSessionsList,
    addSession
}