import React, { Component } from 'react'
import  '../styles/Home.css'
import QuizBox from './QuizBox'

class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {}
    }
    
    componentDidMount(){
        fetch('http://192.168.1.37:8081/api/topics')
        .then(response => response.json())
        .then(data => {
            this.setState({
                data
            })
           // console.log(this.state.data)
        });
    }

    render() {
        return (
            <div>
                <h1>Quizzer</h1>
                <div className="QuizBox">
                    
                        
                            {console.log(this.state)}
                            {( this.state.data ) ? this.state.data.map( el => <QuizBox key={el.id} id={el.id} title={el.topicTitle}></QuizBox>) : null}
                       
                </div>
            </div>
        )
    }
}

export default Home