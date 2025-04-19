import { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Score from './components/Score';
import Header from './components/Header';
import Footer from './components/Footer';

const quizQuestions = [
  {
    question: "What is the purpose of useState in React?",
    options: [
      "To manage state in a functional component",
      "To handle side effects",
      "To perform HTTP requests",
      "To create a new component"
    ],
    answer: "To manage state in a functional component"
  },
  {
    question: "What does JSX stand for?",
    options: [      
      "JavaScript",
      "JavaScript XML",
      "Java Styling Extension",
      "JavaScript Syntax Expression"
    ],
    answer: "JavaScript XML"
  },
  {
    question: "Which hook is used to handle side effects in functional components?",
    options: [
      "useState",
      "useEffect",
      "useReducer",
      "useContext"
    ],
    answer: "useEffect"
  },  
  {
    question: "Which feature of React is important?",
    options: [
      "It supports server-side rendering",
      "It will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive",
      "It uses reusable or composable UI components for developing the view",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is a limitation of React?",
    options: [
      "You have to pay a subscription",
      "You need a very expensive computer to run React",
      "React is not a full-blown framework as it is only a library",
      "It is not Reusable"
    ],
    answer: "React is not a full-blown framework as it is only a library"
  },
  {
    question: "What are Keys in React?",
    options: [
      "A key is a special string attribute that needs to be included when using lists of elements",
      "A key is an access code used to install files",
      "A key is used to import files"
    ],
    answer: "A key is a special string attribute that needs to be included when using lists of elements"
  },
  {
    question: "True or False? React allows developers to develop engaging user interfaces that can be easily navigated in various search engines.",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "What are props in React?",
    options: [
      "Images you can download",
      "Default files with React",
      "The inputs to a component of React"
    ],
    answer: "The inputs to a component of React"
  },
  {
    question: "What are React Hooks?",
    options: [
      "The built-in functions that permit developers for using the state and lifecycle methods within React components",
      "The built-in methods that hooks two documents together",
      "A config file"
    ],
    answer: "The built-in functions that permit developers for using the state and lifecycle methods within React components"
  },
  {
    question: "What are Custom Hooks?",
    options: [
      "The built-in functions that permit developers for using the state and lifecycle methods within React components",
      "A function in Javascript whose name begins with use and which calls other hooks",
      "The built-in methods that hooks two documents together"
    ],
    answer: "A function in Javascript whose name begins with use and which calls other hooks"
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption('');
  };

  return (
    <div className="quiz-app"> 
    <Header />    
      {showScore ? (
        <Score score={score} totalQuestions={quizQuestions.length} handleRestartQuiz={handleRestartQuiz} />
      ) : (
        <Question
          questionData={quizQuestions[currentQuestion]}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
          totalQuestions={quizQuestions.length}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;

