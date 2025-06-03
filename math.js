const levels = [
    { questionImage: '../img/1.png', head: 'level 1' , hint:  '<h3>Hint:</h3> Multiply', 
    solution: '<h3>Solution:</h3> 3*5=15.', answer: '15' },
    { questionImage: '../img/2.png', head: 'level 2' , hint: '<h3>Hint:</h3> All possible ways!',
     solution: '<h3>Solution:</h3> 14', answer: '14' },
    { questionImage: '../img/3.png', head: 'level 3' , hint: ' <h3>Hint:</h3> 10  , 70',  
     solution: "<h3>Solution:</h3> A=70 ,B=10.<br> A/B = 7." , answer: '7' },
    { questionImage: '../img/4.png', head: 'level 4' , hint: '<h3>Hint:</h3> Multiply', 
    solution: '<h3>Solution:</h3> 7', answer: '7' },
    { questionImage: '../img/5.png', hint: '<h3>Hint:</h3> 1 <sup>x</sup>', head: 'level 5' ,
     solution: '<h3>Solution:</h3> 1 <sup>x</sup> = 1. ', answer: '1' },
    { questionImage: '../img/6.png', hint: '<h3>Hint:</h3> Multiples of 7', head: 'level 6' ,
    solution: '<h3>Solution:</h3> 63', answer: '63' } ,
    { questionImage: '../img/7.png', hint: '<h3>Hint:</h3> 2 <sup>n</sup> + 1', head: 'level 7' ,
    solution: '<h3>Solution:</h3> 2 <sup>3</sup> + 1 = 9 <br> 2 <sup>4</sup> + 1 = 17  <br>........<br> 2 <sup>6</sup> + 1 = 65 ', answer: '65' },
    { questionImage: '../img/8.png', hint: '<h3>Hint:</h3> All possible ways', head: 'level 8' ,
     solution: '<h3>Solution:</h3> 13 ', answer: '13' },
    { questionImage: '../img/9.png', hint: '<h3>Hint:</h3> ↓ = → ', head: 'level 9' ,
     solution: '<h3>Solution:</h3> 5+14 = 10+9 <br> 8+7 = 13+2 <br> 7+ <u><b>7</b></u> = 9+5 <br> Ans: 7. ', answer: '7' },
    { questionImage: '../img/10.png', hint: '<h3>Hint:</h3> divide by 4 ', head: 'level 10' ,
     solution: '<h3>Solution:</h3> (15+9)/4 = 6', answer: '6' },
    { questionImage: '../img/11.png', hint: '<h3>Hint:</h3>  A-B = ↓', head: 'level 11' ,
     solution: '<h3>Solution:</h3> 30 -3 = 27.', answer: '27' },
    { questionImage: '../img/12.png', hint: '<h3>Hint:</h3> Multiple. <br> To get opposites', head: 'level 12' ,
     solution: '<h3>Solution:</h3> 13 * 3 = 39. <br> 21 * 3 = 63. <br> 8*3 = 24. <br> Ans: 3. ', answer: '3' },
    { questionImage: '../img/13.png', hint: '<h3>Hint:</h3> x <sup>0</sup> = 1.', head: 'level 13' ,
     solution: '<h3>Solution:</h3> 12', answer: '12' },
    { questionImage: '../img/14.jpg', hint: '<h3>Hint:</h3> Common difference', head: 'level 14' ,
     solution: '<h3>Solution:</h3> 21, 28, 35, 42. <br> Ans:35.', answer: '35' } ,
    { questionImage: '../img/15.png', hint: '<h3>Hint:</h3> + and /', head: 'level 15' ,
    solution: '<h3>Solution:</h3> (21 + 7)/2= 14 <br> (19  + 7)/2 = 13', answer: '13' },
    { questionImage: '../img/16.png', hint: '<h3>Hint:</h3> Multiply the oppposites', head: 'level 16' ,
    solution: '<h3>Solution:</h3> 12*4 = 48', answer: '48' },
    { questionImage: '../img/17.png', hint: '<h3>Hint:</h3> Multiply', head: 'level 17' ,
    solution: '<h3>Solution:</h3> 24', answer: '4' },
   { questionImage: '../img/18.png', hint: '<h3>Hint:</h3> 0 <sup>x</sup> = 0', head: 'level 18' ,
    solution: '<h3>Solution:</h3> 0/x = 0.', answer: '0' } ,
   { questionImage: '../img/19.png', hint: '<h3>Hint:</h3> Multiply and Add', head: 'level 19' ,
   solution: '<h3>Solution:</h3> (9*3) + (2*6) = 39. <br> (4*5) + (4*2) = 28. <br> Ans: 28.', answer: '28' },
   { questionImage: '../img/20.png', hint: '<h3>Hint:</h3> (A - B)<sup>2</sup>', head: 'level 20' ,
   solution: '<h3>Solution:</h3> (20 - 15) <sup>2</sup> = 25 <br> (11 - 9) <sup>2</sup> = 4 <br> (15 - 6) <sup>2</sup> = 36 <br> (20 - 11) <sup>2</sup> = 81 <br> Ans: 81.' , answer: '81' }
  ];

  let currentLevel = 0; // Start from level 0
  ;
  let hintButtonClicked = false;
  let solutionButtonClicked = false;

  // Function to load level content
  function loadLevel(level) {
    const questionImage = document.getElementById('question-image');
    questionImage.src = levels[level].questionImage;
    const heading = document.getElementById('heading');
    heading.textContent = levels[level].head;
    const hintButton = document.getElementById('hint-button');
    const solutionButton = document.getElementById('solution-button');
    const nextLevelButton = document.getElementById('next-level-button');
    const prevLevelButton = document.getElementById('prev-level-button');
    const answerInput = document.getElementById('answer-input');
    const submitButton = document.getElementById('submit');
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
            nawazBox.innerHTML= levels[level].hint;
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

    submitButton.onclick = function () {
      const answerInput = document.getElementById('answer-input');
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
    };

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