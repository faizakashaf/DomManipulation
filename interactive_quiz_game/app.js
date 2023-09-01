// Quiz questions and answers
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Mars", "Venus"],
        correct: "Jupiter"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correct: "Carbon Dioxide"
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correct: "Leonardo da Vinci"
    }
];

// DOM elements
const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('questionContainer');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score');
const questionNumberElement = document.getElementById('questionNumber');
const totalQuestionsElement = document.getElementById('totalQuestions');

let currentQuestionIndex = 0;
let score = 0;

// Event listener for the "Start Game" button
startButton.addEventListener('click', startGame);

// Function to start the game
function startGame() {
    startButton.style.display = 'none'; // Hide the "Start Game" button
    questionContainer.style.display = 'block'; // Show the question container
    loadQuestion(); // Load the first question
}

// Function to load the next question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement('button');
        choiceButton.innerText = choice;
        choiceButton.classList.add('choice'); // Add the default class
        if (index === 0) {
            choiceButton.classList.add('light-green'); // Add light-green class to the first choice
        }
        choiceButton.addEventListener('click', () => checkAnswer(choice));
        choicesElement.appendChild(choiceButton);
    });

    questionNumberElement.innerText = currentQuestionIndex + 1;
    totalQuestionsElement.innerText = quizData.length;
}

// Function to check the answer
function checkAnswer(selectedChoice) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedChoice === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // End of the quiz
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    questionContainer.innerHTML = `<p>Congratulations! You've completed the quiz.</p>`;
    scoreElement.innerText = score;
}

// Initialize the quiz
loadQuestion();


