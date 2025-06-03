// Constants for games
const GAMES = {
    C_SNIPPETS: 'c_snippets',
    MATH_PUZZLES: 'math_puzzles',
    JAVA_SNIPPETS: 'java_snippets'
};

// Select the current game (example: GAMES.JAVA_SNIPPETS)
let currentGame = GAMES.JAVA_SNIPPETS;

// Define levels array with Java snippets
const levels = [
    { 
        levelNumber: 1,
        questionImage: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}', 
        hint: '<h3>Hint:</h3> This program prints "Hello, World!"', 
        solution: '<h3>Solution:</h3> The program prints "Hello, World!" to the console.', 
        answer: 'H' 
    },
    { 
        levelNumber: 2,
        questionImage: 'public class Sum {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 10;\n        int sum = a + b;\n        System.out.println("Sum: " + sum);\n    }\n}', 
        hint: '<h3>Hint:</h3> Add the values of variables `a` and `b`.', 
        solution: '<h3>Solution:</h3> The sum of 5 and 10 is 15.', 
        answer: 'S' 
    },
    { 
        levelNumber: 3,
        questionImage: 'public class EvenOdd {\n    public static void main(String[] args) {\n        int number = 6;\n        if (number % 2 == 0) {\n            System.out.println(number + " is even.");\n        } else {\n            System.out.println(number + " is odd.");\n        }\n    }\n}', 
        hint: '<h3>Hint:</h3> Check if the number is divisible by 2 with no remainder.', 
        solution: '<h3>Solution:</h3> 6 is even, so the program prints "6 is even.".', 
        answer: '6' 
    },
    // Add more levels as needed
];

// Initialize currentLevel and other variables
let currentLevel = 0; // Start from level 0
let hintButtonClicked = false;
let solutionButtonClicked = false;

// Function to load level content
function loadLevel(level) {
    const questionImage = document.getElementById('question-image');
    questionImage.innerText = levels[level].questionImage;
    const heading = document.getElementById('heading');
    heading.textContent = 'Level ' + levels[level].levelNumber;
    const hintButton = document.getElementById('hint-button');
    const solutionButton = document.getElementById('solution-button');
    const nextLevelButton = document.getElementById('next-level-button');
    const prevLevelButton = document.getElementById('prev-level-button');
    const answerInput = document.getElementById('answer-input');
    const nawazBox = document.getElementById('nawaz-box');
    const addBox = document.getElementById('add-box');
    const countdown = document.getElementById('countdown');

    answerInput.value = '';
    nawazBox.textContent = '';

    nawazBox.style.display = 'none';
    addBox.style.display = 'none';
    countdown.textContent = '';

    function showHintSolution(countdownTime) {
        let timer = setInterval(() => {
            countdownTime--;
            nawazBox.textContent = "Loading.. " + countdownTime;
            addBox.style.display = 'block';
            if (countdownTime === 0) {
                clearInterval(timer);
                if (hintButtonClicked) {
                    nawazBox.innerHTML = levels[level].hint;
                } else if (solutionButtonClicked) {
                    nawazBox.innerHTML = levels[level].solution;
                }
                document.addEventListener('click', () => {
                    nawazBox.textContent = '';
                    document.getElementById('nawaz-box').style.display = 'none';
                    document.getElementById('add-box').style.display = 'none';
                    document.getElementById('vxz').style.display = 'block';
                }, { once: true });

            }
        }, 1000); // Update timer every second
    }

    function hideMainContent() {
        document.getElementById('vxz').style.display = 'none';
    }

    function showNawazBox() {
        nawazBox.style.display = 'block';
        nawazBox.style.opacity = 1;
        addBox.style.display = 'block';
        addBox.style.opacity = 1;
    }

    hintButton.onclick = function () {
        hintButtonClicked = true;
        solutionButtonClicked = false;
        hideMainContent();
        showNawazBox();
        showHintSolution(11); // Start countdown for 10 seconds
    };

    solutionButton.onclick = function () {
        solutionButtonClicked = true;
        hintButtonClicked = false;
        hideMainContent();
        showNawazBox();
        showHintSolution(16);
    };

    nextLevelButton.style.opacity = '0.6'; // Initially disable Next Level button
    nextLevelButton.disabled = true;

    answerInput.addEventListener('input', function () {
        const messagePopup = document.getElementById('message-popup');
        const messageContent = document.getElementById('message-content');

        if (answerInput.value.trim().toLowerCase() === levels[currentLevel].answer.toLowerCase()) {
            messageContent.textContent = "You Are Right!!";
            nextLevelButton.style.opacity = '1';
            nextLevelButton.disabled = false;
        } else {
            messageContent.textContent = "Oops, Incorrect Answer.";
            nextLevelButton.style.opacity = '0.6';
            nextLevelButton.disabled = true;
        }

        messagePopup.classList.add('show');

        document.addEventListener('click', function closePopup(event) {
            if (!messagePopup.contains(event.target) && event.target !== submitButton) {
                messagePopup.classList.remove('show');
                document.removeEventListener('click', closePopup);
            }
        });
    });

    nextLevelButton.onclick = function () {
        const completedLevel = parseInt(localStorage.getItem('completedLevel')) || 0;

        if (currentLevel < levels.length - 1) {
            currentLevel++;
            loadLevel(currentLevel);

            if (currentLevel > completedLevel) {
                localStorage.setItem('completedLevel', currentLevel);
                localStorage.setItem('update', new Date().toISOString());
            }
        } else {
            alert('Congratulations! You have completed all levels.');
        }
    };

    prevLevelButton.onclick = function () {
        if (currentLevel > 0) {
            currentLevel--;
            loadLevel(currentLevel);
        } else {
            alert('You are already on the first level.');
        }
    };

    document.addEventListener('click', function (event) {
        if (hintPopup.classList.contains('show') || solutionPopup.classList.contains('show')) {
            hintPopup.classList.remove('show');
            solutionPopup.classList.remove('show');
            document.getElementById('vxz').style.display = 'block';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const levelIndex = parseInt(localStorage.getItem('levelIndex'));
    if (!isNaN(levelIndex) && levelIndex >= 0) {
        currentLevel = levelIndex;
        loadLevel(levelIndex);
    } else {
        loadLevel(0);
    }
});
