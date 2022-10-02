import React from "react";

function QuestionItem({ question, onDeleteQuestion, updateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  const handleDelete = (id) => {    
    onDeleteQuestion(id);
    // console.log(`clicked id ${id}`)
  };

  const handleChange = (id,event) => {
    event.preventDefault()
    const { target } = event;    
    updateAnswer({"correctIndex": target.value })
    
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select
          defaultValue={correctIndex}          
          onChange={(e) => handleChange(id,e)}
        >
          {options}
        </select>
      </label>
      <button onClick={(e) => {
        e.stopPropagation()
        handleDelete(id)}}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
