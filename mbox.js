

function updateBoxes() {
    const completedLevel = parseInt(localStorage.getItem('completedLevel')) || 0;

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
    // Reset the completedLevel to 0
    localStorage.setItem('completedLevel', 0);
    updateBoxes();
}

function boxClicked(event) {
const box = event.target;
const levelIndex = parseInt(box.getAttribute('data-level'));
const completedLevel = parseInt(localStorage.getItem('completedLevel')) || 0;

if (levelIndex <= completedLevel) {
// Store the level index in localStorage
localStorage.setItem('levelIndex', levelIndex);
// Redirect to index.html
window.open ('math.html');
} else {
alert(`Level ${levelIndex + 1} is locked!`);
}
}

// Attach the boxClicked event to the boxes
document.addEventListener('DOMContentLoaded', () => {
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
box.addEventListener('click', boxClicked);
});
});


document.addEventListener('DOMContentLoaded', () => {
    updateBoxes();

    // Attach click event listeners to all boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', boxClicked);
    });
});

// Listen for storage changes
window.addEventListener('storage', (event) => {
    if (event.key === 'completedLevel' || event.key === 'update') {
        updateBoxes();
    }
});

// Attach event listener to the reset button
document.getElementById('resetButton').addEventListener('click', resetBoxes);