import { useState,useEffect } from 'react'
import data from './data'
import './App.css'
import Questions from './Questions'

function App() {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null);
  
  const toggleQuestion = (id) => {
    const newActiveId = id  === activeId? null : id
setActiveId(newActiveId)
  }
  return (
    <>
      <main>
        <Questions questions={questions} activeId={activeId} toggleQuestion={toggleQuestion} />
      </main>
    </>
  );
}

export default App
