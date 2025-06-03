// Constants for games
const GAMES = {
    C_SNIPPETS: 'c_snippets',
    MATH_PUZZLES: 'math_puzzles',
    JAVA_SNIPPETS: 'java_snippets'
};

// Select the current game (example: GAMES.C_SNIPPETS)
let currentGame = GAMES.C_SNIPPETS;

// Number of levels for the current game
const totalLevels = 20; // Adjust this value based on the total levels available in your game

function updateBoxes() {
    const completedLevelKey = `${currentGame}_completedLevel`;
    const completedLevel = parseInt(localStorage.getItem(completedLevelKey)) || 0;

    // Lock all levels initially
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.classList.remove('unlocked');
    });

    // Unlock completed levels
    for (let i = 0; i <= completedLevel; i++) {
        const box = document.querySelector(`.box[data-level="${i}"]`);
        if (box) {
            box.classList.add('unlocked');
        }
    }
}

function resetBoxes() {
    const completedLevelKey = `${currentGame}_completedLevel`;
    // Reset the completedLevel to 0
    localStorage.setItem(completedLevelKey, 0);
    updateBoxes();
}

function boxClicked(event) {
    const box = event.target;
    const levelIndex = parseInt(box.getAttribute('data-level'));
    const completedLevelKey = `${currentGame}_completedLevel`;
    const completedLevel = parseInt(localStorage.getItem(completedLevelKey)) || 0;

    if (levelIndex <= completedLevel) {
        const levelIndexKey = `${currentGame}_levelIndex`;
        // Store the level index in localStorage
        localStorage.setItem(levelIndexKey, levelIndex);
        // Redirect to index.html
        window.open('csnip.html');
    } else {
        alert(`Level ${levelIndex + 1} is locked!`);
    }
}

// function nextLevel() {
//     const completedLevelKey = `${currentGame}_completedLevel`;
//     let completedLevel = parseInt(localStorage.getItem(completedLevelKey)) || 0;

//     if (completedLevel < totalLevels - 1) {
//         // Unlock the next level
//         completedLevel++;
//         localStorage.setItem(completedLevelKey, completedLevel);
//         updateBoxes();
//     } else {
//         alert('You have completed all levels!');
//     }
// }

// Attach the boxClicked event to the boxes
document.addEventListener('DOMContentLoaded', () => {
    updateBoxes();

    // Attach click event listeners to all boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', boxClicked);
    });

    // Attach event listener to the next level button
    // const nextLevelButton = document.getElementById('nextLevelButton');
    // if (nextLevelButton) {
    //     nextLevelButton.addEventListener('click', nextLevel);
    // }
});

// Listen for storage changes
window.addEventListener('storage', (event) => {
    if (event.key === `${currentGame}_completedLevel` || event.key === 'update') {
        updateBoxes();
    }
});

// Attach event listener to the reset button
document.getElementById('resetButton').addEventListener('click', resetBoxes);
