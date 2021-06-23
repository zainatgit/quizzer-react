import React, { Component } from 'react'
import '../styles/EachQuestion.css'

export default class EachQuestion extends Component {

    constructor(props) {
        
        super(props)
        console.log("Each Question props "+ props)
        this.state = {}
    }

    changeRadioHandler = (event) => {
        this.props.changeHandler(event)
    }
    render() {
        return (
            <div className="eachQuestionBox">
                <h2>{this.props.questionTitle}</h2>
                    <div onChange={this.changeRadioHandler}>
                        {this.props.options.map ( el =>  (
                            <label className="options">
                                {el.optionTitle}
                            &nbsp;<input type="radio" name={this.props.id} value={el.optionSequence} id={el.id}/> 
                            </label>
                        ))
                        }
                        <hr></hr>
                    </div>
            </div>
        )
    }
}
