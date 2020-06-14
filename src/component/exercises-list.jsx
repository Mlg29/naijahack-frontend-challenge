import React from "react"
import axios from 'axios'
import Exercise from "./exercise"


class ExercisesList extends React.Component {
    state = {
        exercises: []
    }

    deleteExercise = id => {
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data))

            this.setState({
                exercises: this.state.exercises.filter( el => el._id !==  id)
            })
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises')
            .then(res => {
                this.setState({ exercises: res.data})
            })
            .catch(err => console.log(err))
    }

    exerciseList = () => {
        return this.state.exercises.map(current => {
            return <Exercise exercise={current} deleteExercise={this.deleteExercise} key={current._id} />
        })
    }
    render() {
        return (
            <div>
                <h1>Logged Exercise</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <td>Username</td>
                            <td>Description</td>
                            <td>Duration</td>
                            <td>Date</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exerciseList() }
                    </tbody>
                </table>
            </div>
        )
    }
    
}

export default ExercisesList