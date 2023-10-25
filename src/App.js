import React from 'react';
import QuestionsPage from './components/QuestionsPage';
import './App.css';


function App() {

  const [showQuestions, setShowQuestions] = React.useState(false)

  function startGame() {
    setShowQuestions(true)
  }

  return (
    <div className='main'>
      {!showQuestions ?
        <div className='main--startPage'>
          <h1>Quizzical</h1>
          <p>Answer the Questions !</p>

          <button
            className='start--btn'
            onClick={startGame}
          >
            Start quiz
          </button>

        </div> :
        null
      }

      {showQuestions ? <QuestionsPage /> : null}


    </div >
  );
}

export default App;
