import React, { Component } from 'react';
import { addSession } from '../services/workshops'

class AddSession extends Component {

    state = {
       values: {
           sequenceId: '232',
           name: ''
       },
       errors: {
           sequenceId: []
       },
       isValid: false
    }

    validate = () =>  {
        //sequenceId cannot be empty, it must be a number
        const { values: { sequenceId, name }} = this.state
        const errors = {
            sequenceId: []
        }
        let isValid = true
        
        if(sequenceId.trim() === '') {
            errors.sequenceId.push('Sequence ID cannot be empty')
            isValid = false
        }

        if(!(/^\d+$/.test( sequenceId ))) {
            errors.sequenceId.push('Sequence can contain only digits')
            isValid = false
        }

        this.setState({
            errors,
            isValid
        })
    }
    updateValue = (event) => {

        const value = event.target.value
        const key = event.target.name

        this.setState({
            values: {
                ...this.state.values,
                [key]: value
            }
        }, this.validate)
    }

    AddSession = (event) => {

        const {
            sequenceId,
            name,
            speaker,
            duration,
            level,
            abstract,
            upvoteCount
        } = this.state.values

        event.preventDefault()
        const newSession = {
            sequenceId,
            name,
            speaker,
            duration,
            level,
            abstract,
            upvoteCount
        }

        console.log(`this.props.match in AddSession  = ${this.props.match}`)
        addSession(this.props.match.params.id, this.state.values)
            .then( updatedSession => alert(`Session with id ${updatedSession.id} is added!`))
            .catch(error => alert(error.message))
            // .then( () => this.props.history.push(`/workshops/${this.props.match.params.id}`))

    }
    render() {
        const { values: {sequenceId, name}, errors: {sequenceId: sequenceIdErrors}, isValid } = this.state
        // console.log(errors.sequenceId)
        console.log("this.props.match in AddSession in render", this.props.match)

        return (
            <div className="container">
                <div className="row my-4">
                    <div className="col-12">
                        <h3>
                            Details of new session
                        </h3>
                        <hr />
                    </div>
                </div>
                <div className="col-12">
                    <form onSubmit={this.AddSession}>
                        <div className="form-group row">
                            <label htmlFor="sequenceId" className="col-sm-3 col-form-label">Sequence ID</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="sequenceId" id="sequenceId" placeholder="" aria-describedby="sequenceHelpId" value={sequenceId} onChange={this.updateValue} />
                                {/* {sequenceId} */}
                                <small id="sequenceHelpId" className="text-muted">
                                Sequence ID is the serial number of the session in the workshop</small>
                                { sequenceIdErrors.map( err => <div>{err}</div>)}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="name" id="name" placeholder=""  aria-describedby="NameHelpId" value={name} onChange={this.updateValue}/>
                                {this.state.values.name}
                                <small id="NameHelpId" className="text-muted">The title of the session</small>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="speaker" className="col-sm-3 col-form-label">Speaker(s)</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="speaker" id="speaker" placeholder="" aria-describedby="speakerHelpId" />
                                <small id="speakerHelpId" className="text-muted">The name of the speaker(s) for this session. Separate speaker names by a comma. Example <strong>John Doe, Jane Doe</strong>.</small>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="duration" className="col-sm-3 col-form-label">Duration</label>
                            <div className="col-sm-9">
                                <input type="number" className="form-control" name="duration" id="duration" placeholder="" aria-describedby="durationHelpId" />
                                <small id="durationHelpId" className="text-muted">The length of the session in hours</small>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="level" className="col-sm-3 col-form-label">Level</label>
                            <div className="col-sm-9">
                                <select className="form-control" name="level" id="level">
                                    <option value="">-- Select the level of the session --</option>
                                    <option value="Basic">Basic</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="duration" className="col-sm-3 col-form-label">Abstract</label>
                            <div className="col-sm-9">
                                <textarea type="number" className="form-control" name="abstract" id="abstract"
                                aria-describedby="abstractHelpId"></textarea>
                                <small id="abstractHelpId" className="text-muted">A brief description of the session topics</small>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-3 col-sm-9">
                                <button type="submit" className="btn btn-primary mr-2" disabled={!isValid} onClick={this.validate}>Add session</button>
                                <button type="button" className="btn btn-danger">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddSession;