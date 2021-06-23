import React, { Component } from 'react'
import EachQuestion from './EachQuestion'
import axios from 'axios'

class QuestionPage extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            topicId : this.props.match.params.topicId,
            submission : []
        }
    }

    componentDidMount(){
        fetch(`http://192.168.1.37:8081/api/questions/${this.props.match.params.topicId}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data
            })

        });
    }

    radioButtonChangeHandler = (event) => {
        console.log("Radio Change in parent")
        console.log("ID : "+event.target.name+" Value : "+event.target.value)
        const id = event.target.name
        const value = event.target.value
        var newSubmission = (this.state.submission) ? [...this.state.submission] : []
        if(newSubmission.some( el => Object.keys(el)[0] === id)){
            console.log("already present")
            newSubmission = newSubmission.filter( el => Object.keys(el)[0] !== id)
            newSubmission.push({ [id] : value})
        } else{
            newSubmission.push({ [id] : value})
        }
        this.setState({
            submission : newSubmission
        }, () => console.log(this.state))
        
    }

    submitQuiz = (e) => {
        e.preventDefault();
        console.log('Submit Quiz')
        var submitJson = {}
        submitJson.topicId = this.state.topicId
        submitJson.submission = this.state.submission
        console.log(submitJson)
        axios.post('http://192.168.1.13:8081/api/submitQuiz', submitJson)
        .then(res => {
            console.log(res.data)
            alert("You answered "+res.data.points+" correctly")
        })
    }

    render() {
        <h1>{this.props.params}</h1>
        let showQusetions
        if(this.state.data){
            showQusetions = <form onSubmit={this.submitQuiz}>
                               { this.state.data.map( el =>   <EachQuestion changeHandler={this.radioButtonChangeHandler} 
                                        key={el.id} {...el}/>) 
                                }
                                <input type="submit" className="submitButton"/>
                            </form>
        } else{
            showQusetions = <h3>No Question found</h3>
        }
        return (
            <div className="questionContainer">
                {showQusetions}
            </div>
        )
    }
}

export default QuestionPage
