import React, { Component } from 'react'
import CreateQuestionSet from './CreateQuestionSet'
import '../styles/CreateQuestionSet.css'
import axios from 'axios'

class CreateQuiz extends Component {
    data = {};
    constructor() {
        super();
        this.state = {
            noOfQuestions : 1
        }
        this.quizTitleRef= React.createRef();
       
    }
    addQuestionSetHandler = () => {
        console.log("Add Question Clicked")
        var newQuestionCount = this.state.noOfQuestions+1;
        console.log("New Questions length " + newQuestionCount);
        this.setState({
            noOfQuestions : newQuestionCount
        })
    }

    formHandler = (e) => {
        e.preventDefault();
        var allTargetNodes = e.target;
        console.log(e)
        var postData = {};
        postData.topicTitle =  e.target[0].value;
        postData.noOfQuestions = this.state.noOfQuestions;
        postData.description = "NA";
        postData.createdBy = "admin";
        console.log(e.target.length);
        var questionArray = [];
        for(var start = 1; start<e.target.length-2;start=start+6){
            var eachQuestion = {};
            eachQuestion.questionTitle = e.target[start].value;
            var correctOptionIndex = start+5;
            console.log(correctOptionIndex + " " +typeof(correctOptionIndex));
            eachQuestion.correctOption = e.target[correctOptionIndex].value;
            var optionArray = [];
            for(var i=1; i<=4; i++){
                console.log("populating eachOptionArrayElement");
                var eachOptionArrayElement = {};
                eachOptionArrayElement.optionSequence = String.fromCharCode(64+i);
                eachOptionArrayElement.optionTitle = e.target[start+i].value;
                optionArray.push(eachOptionArrayElement);
            }
            eachQuestion.options = optionArray;
            console.log(eachQuestion);
            questionArray.push(eachQuestion);
        }
        postData.question = questionArray;
        axios.post('http://192.168.1.37:8081/api/topicQuestionOption', postData)
        .then(response => console.log(response))
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
    componentDidUpdate() {
        console.log("Updated Component")
    }
    render() {
        return (
            <div>
                <h1>Create Page</h1>
                <form onSubmit={this.formHandler}>
                <label className="quiz-title">Quiz Title</label><br>
                </br><textarea  ref={this.quizTitleRef} className="textarea-title" type="text"></textarea>
                {[...Array(this.state.noOfQuestions)].map((e, i) => <CreateQuestionSet 
                 key={i}></CreateQuestionSet>)}
                <button type="button" onClick={this.addQuestionSetHandler}>Add Question Set</button>
                <button type="submit" onClick={this.submitQuestionSet}>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateQuiz
