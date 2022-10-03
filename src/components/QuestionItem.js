import React, {useState} from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;
  const [updatedIndex, setUpdatedIndex] = useState(correctIndex)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

function handleChange(id) {
    setUpdatedIndex(correctIndex)
    fetch(`http://localhost:4000/questions/${id}`, {
      method:"PATCH", 
      headers:{
        "Content-Type":"application/json"
      }, 
      body:JSON.stringify({"correctIndex": correctIndex})
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    })
    updatedIndex()
  }
  const handleDelete =()=>{
    console.log(id)
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
