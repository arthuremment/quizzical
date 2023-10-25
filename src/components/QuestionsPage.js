import React from 'react'
import data from '../data'

const QuestionsPage = () => {

  const [quizz, setQuizz] = React.useState({})

//   React.useEffect(() => {
//     fetch("https://opentdb.com/api.php?amount=5&type=multiple")
//     .then(res => res.json())
//     .then(data => setQuizz(data.results.question))
// }, [])

  const [selectedAnswers, setSelectedAnswers] = React.useState(Array(quizz.length).fill(""))

  const [showAnswers, setShowAnswers] = React.useState(false)

  const handleAnswer = (answer, index) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = answer;

    setSelectedAnswers(newSelectedAnswers)
  }

  const handleShowAnswers = () => {
    setShowAnswers(true)
  }

  let correctAnswers = []
  for (let i = 0; i <= 4; i++) {
    correctAnswers.push(data[i].correctAnswer)
  }
  let score = []
  for (let i = 0; i < selectedAnswers.length; i++) {
    for (let j = 0; j < correctAnswers.length; j++) {
      if (selectedAnswers[i] === correctAnswers[j]) {
        score.push(selectedAnswers[i]);
      }
    }
  }

  function playAgain(){
    setSelectedAnswers([])
    setShowAnswers(false)
  }


  return (
    <div className='main--Question'>
      <div className='main--questionsPage'>
        {data.map((question, index) => (
          <div
            className='question--topic'
            key={index}
          >
            <p className='question'>{question.question}</p>
            <ul className='answers--list'>
              {question.answers.map((answer) => (
                <li
                  key={answer}
                  onClick={() => handleAnswer(answer, index)}
                  style={{
                    backgroundColor:
                      showAnswers && answer === question.correctAnswer ?
                      'green'  : selectedAnswers[index] === answer ? "grey" : "transparent"
                  }}
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>


      {showAnswers ?
        <div className='main--button'>
          <p className='main--score'>You scored {score.length}/5 correct answers</p>
          <button
            className='button--check'
            onClick={playAgain}
          >
            Play Again
          </button>
        </div>
        :
        <div className='main--button'>
          <button
            className='button--check'
            onClick={handleShowAnswers}
          >
            Check answers
          </button>
        </div>}

    </div>
  );
};



export default QuestionsPage
