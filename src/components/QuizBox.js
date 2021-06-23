import React, { Component } from 'react'
import '../styles/QuizBox.css'
import { Link } from 'react-router-dom'

class QuizBox extends Component {
    render() {
        return (
            <Link to={`/topics/${this.props.id}`} params={{ title: this.props.title }}>
                <div className="eachBox">
                    {this.props.title}
                </div>
            </Link>
            
        )
    }
}

export default QuizBox