import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios"


class EditExercise extends React.Component {
    state = {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    }
    handleChange = (e) => {
        const { name} = e.target
        this.setState({[name]: e.target.value})
    }
    componentDidMount = () => {
       axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                username: res.data.username,
                description: res.data.description,
                duration: res.data.duration,
                date: new Date(res.data.date)
            }) 
        })
            .catch(err => console.log(err))

        axios.get('http://localhost:5000/users/')
        .then(res => {
            if (res.data.length > 0) {
                this.setState({
                    users: res.data.map(user => user.username)
                })
            }
    })
    }
    handleDate = (date) => {
        this.setState({
            date: date
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        
        console.log(exercise)

        axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id, exercise)
         .then(res => console.log(res.data) )

        
        window.location = '/';
        
    }
    render() {
        const {username, description, duration, date, users} = this.state
        return (
            <div>
                 <h1>Edit Exercise Log</h1>
                 <form onSubmit={this.handleSubmit}>
                     <div className="form-group">
                         <label>Username: </label>
                         <select ref="userInput"
                            required
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                         >
                             {
                                 users.map(user => {
                                     return <option
                                        key={user}
                                        value={user}
                                        >
                                            {user}
                                     </option>
                                 })
                             }

                         </select>
                     </div>
                     <div className="form-group">
                         <label>Description: </label>
                         <input type="text" name="description" className="form-control" value={description} onChange={this.handleChange} />
                     </div>
                     <div className="form-group">
                         <label>Duration (In Minutes): </label>
                         <input type="text" name="duration" className="form-control" value={duration} onChange={this.handleChange} />
                     </div>
                     <div className="form-group">
                         <label>Date: </label>
                         <div>
                             <DatePicker
                                selected={date}
                                onChange={this.handleDate}
                                
                              />
                        </div>
                         
                     </div>
                     <div className="form-group">
                         <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                     </div>
                 </form>
            </div>
        )
    }
    
}

export default EditExercise