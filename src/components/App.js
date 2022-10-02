import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";


//const BASE_URL = 'http://localhost:4000/questions'

function App() {
  const [page, setPage] = useState("List");
  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm />
      ) : (
        <QuestionList />
      )}
    </main>
  );
}

export default App;
