import React, { Component } from 'react'
import getSessions from '../services/sessions'
export default class SessionsList extends Component {

    state = {
        sessions: []
    }
    render() {
        const sessions = this.state.sessions

        // const sessions = this.props.session
        return (
            <div>
                {
                    sessions.map(session => (
                        <div>
                            <label htmlfor="workshopId">workshopId:</label>
                            <p name="workshopId">{session.workshopId}</p>
                            <label htmlfor="name">name:</label>
                            <p name="name">{session.name}</p>
                            <label htmlfor="speaker">speaker:</label>
                            <p name="speaker">{session.speaker}</p>
                            {/* <label htmlFor=""></label>
                            <p></p>
                            <label htmlFor=""></label>
                            <p></p>
                            <label htmlFor=""></label>
                            <p></p>
                            <label htmlFor=""></label>
                            <p></p> */}
                        </div>
                    ))
                    // <p>This is sessions list</p>
                }
            </div>
        )
    }

    componentDidMount() {
        getSessions()
        .then( sessions => {
            this.setState({
                sessions
            })
        })
    }
}


