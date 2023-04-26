const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: ' What is the Full Form of the SPX? ',
    answers: [
      { text: '(A) Sequenced Packet Exchange', correct: true },
      { text: '(B) Sequence Packet Exchange', correct: false },
      { text: '(C) Sequenced Packets Exchange', correct: false },
      { text: '(D) None of the above', correct: false }
    ]
  },
  {
    question: 'There are ___ levels of heading in HTML',
    answers: [
      { text: '(A) Three ', correct:  false },
      { text: '(B) Four', correct:  false },
      { text: '(C) Five ', correct: false },
      { text: '(D) Six', correct: true }
    ]
  },
  {
    question: ' What is the Full Form of the IMAP?',
    answers: [
      { text: '(A) Internet Mail Access Protocol', correct: true },
      { text: '(B) Internet Mails Access Protocol', correct: false },
      { text: '(C) Internet Memo Access Protocol', correct: false },
      { text: '(D) All of the Above ', correct: false }
    ]
  },


  {
    question: ' The Full form Of the MIME is:',
    answers: [
      { text: '(A) Multipurpose Internet Mail Extensions', correct: true },
      { text: '(B) Multiple Internet Mail Extensions', correct: false },
      { text: '(C) Multiple Internet Mails Extensions', correct: false },
      { text: '(D) None of the above ', correct: false }
    ]
  },
  {
    question: ' The ___ at the bottom of your window provides you the status of howmuch percentage of the Web Page is loaded and how much is remaining. ',
    answers: [
      { text: '(A) Program Indicator', correct: false },
      { text: '(B) Program Director', correct: false },
      { text: '(C) Progress Indicator', correct: true },
      { text: '(D) None of the above', correct: false }
    ]
  },
  {
    question: ' The Major components of the Web browser are ___',
    answers: [
      { text: '(A) Menu bar', correct: false },
      { text: '(B) Toolbar', correct: false },
      { text: '(C) Location', correct: false },
      { text: '(D) All of the Above', correct: true}
    ]
  },




  {
    question: ' The decimal range of network address for class B network is between',
    answers: [
      { text: '(A) 127-190 ', correct: false },
      { text: '(B) 128-191  ', correct: true },
      { text: '(C) 128-190', correct: false },
      { text: '(D) None of the above', correct: false }
    ]
  }
]