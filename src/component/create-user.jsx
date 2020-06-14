import React from "react"
import axios from "axios"

class CreateUser extends React.Component {
    state = {
        username: '',
        
    }
    handleChange = (e) => {
        const { name} = e.target
        this.setState({[name]: e.target.value})
    }
  
 
    handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            username: this.state.username,
        }

        console.log(user)

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))

        this.setState({
            username: ''
        })
    }
    render() {
        const {username} = this.state
        return (
            <div>
                 <h1>Create New User</h1>
                 <form onSubmit={this.handleSubmit}>
                     <div className="form-group">
                         <label>Username: </label>
                         <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                     </div>
                     
                     <div className="form-group">
                         <input type="submit" value="Create User" className="btn btn-primary" />
                     </div>
                 </form>
            </div>
        )
    }
    
}

export default CreateUser