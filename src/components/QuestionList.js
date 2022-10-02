import React from "react";
import QuestionItem from "./QuestionItem";
import { FactoryServerCommunication } from "./utils";

function QuestionList() {
  const [questions, setQuestions] = React.useState([]);
  const [dataChanged, setDataChanged] = React.useState(false)

  React.useEffect(() => {
    FactoryServerCommunication("/questions", "GET")(setQuestions);
  }, [dataChanged]);
  

  function deleteQuestion(questionID) {
    FactoryServerCommunication(`/questions/${questionID}`, "DELETE")()
    setDataChanged(currentStatus => !currentStatus)
  }
  function updateQuestion(updatedQuestion) {    
    FactoryServerCommunication(`/questions/${updatedQuestion.id}`,'PATCH',updateQuestion)()
    setDataChanged(currentStatus => !currentStatus)
  }

  const listOfQuestionItem = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question}
      onDeleteQuestion={deleteQuestion}
      updateAnswer={updateQuestion}
    />
  ));
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listOfQuestionItem}</ul>
    </section>
  );
}

export default QuestionList;
