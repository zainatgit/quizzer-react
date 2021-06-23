import React, { Component } from 'react'



export default class CreateQuestionSet extends Component {
    render() {
        return (
            <div>
            <div ref={this.props.QuestionSetRef} className="create-question-box">
                <label >Question Title</label><textarea  type="text"></textarea>
                <label>Option A</label><input className="option-input" type="text"></input>
                <label>Option B</label><input className="option-input" type="text"></input>
                <label>Option C</label><input className="option-input" type="text"></input>
                <label>Option D</label><input className="option-input" type="text"></input>
                <label>Correct Option</label><input maxLength="1" style={{textTransform: "uppercase"}}
                 className="option-input-correct" type="text"></input>
            </div>
            <hr></hr>
            </div>
        )
    }
}
