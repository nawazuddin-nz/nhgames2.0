// Constants for games
const GAMES = {
  C_SNIPPETS: 'c_snippets',
  MATH_PUZZLES: 'math_puzzles',
  JAVA_SNIPPETS: 'java_snippets'
};

// Select the current game (example: GAMES.C_SNIPPETS)
let currentGame = GAMES.C_SNIPPETS;

const levels = [
  { head: 'level 1', questionImage: ' #include<stdio.h> \n int main() \n { \n int a = 10 , b = 20; \n int c = a*(b/a) + b%a; \n printf("%d", c); \n return 0; \n }',   hint:  '<h3>Hint:</h3> b%a = 0', solution: '<h3>Solution:</h3> 10*(20/10) + 0 <br> =10*(2) <br>  A: 20;', answer: '20' },
  { head: 'level 2', questionImage: '#include <stdio.h> \n int main() \n { \n int a = 5, b = 10, c = 15; \n int result = (a > b || a > c) ? (b > c ? b : c) : \n (a > c ? a : c); \n  printf("%d", result); \n return 0; \n }' , hint: '<h3>Hint:</h3> Condition false <br> Goes to 2nd statement.', solution: '<h3>Solution:</h3> In 2nd statement <br> a>c = false. <br> so, res = c=15.', answer: '15' },
  { head: 'level 3' , questionImage: '#include<stdio.h> \n int main() \n { \n int x = 5, y = 10; \n if (x>y); \n x = x+y; \n else \n x = x-y; \n printf("%d", x); \n return 0; \n }', head: 'level 3' , hint: ' <h3>Hint:</h3> Goto else', solution: "<h3>Solution:</h3> x = x- y; <br> x= 5-10" , answer: '-5' },
  { head: 'level 4' , questionImage: ' #include<stdio.h> \n int main() \n { \n int x = 5; \n printf("%d", x>2 ? \n (x<4 ? 10 : 8) : 7); \n return 0; \n }',  hint: '<h3>Hint:</h3> 5 > 2 = True <br> (x<4 / 10 : 8) <br> Focus on it!', 
    solution: '<h3>Solution:</h3> 5 < 4 =  False <br> A: 8;', answer: '8' },

    { head: 'level 5' ,questionImage: '#include <stdio.h> \n int main() \n  { \n int arr[] = {10, 20, 30, 40, 50}; \n  int *ptr = arr; \n  int result = *(ptr + 1) + *(ptr + 3); \n  printf("%d", result); \n return 0; \n }', hint: '<h3>Hint:</h3>  *ptr = arr = a[0].' ,  
     solution: '<h3>Solution:</h3> *(ptr + 1) = a[1] = 20. <br> *(ptr + 3) = a[3] = 40. <br> 20 + 40 = 60. ', answer: '60' },

    { head: 'level 6' , questionImage: '#include <stdio.h> \n int main() \n { \n double x = 5.5; \n int y = (int)x + 2; \n printf("%d", y); \n return 0; \n }', hint: '<h3>Hint:</h3> Type casting <br> int(5.5) = 5',  
    solution: '<h3>Solution:</h3> y = 5 + 2', answer: '7' } ,

    { head: 'level 7' , questionImage: '#include <stdio.h> \n int hey(int x, int y)  { \n return x + y; \n } \n \n int main() \n  { \nint a = 10, b = 20, c = 30; \n int result = hey(a, b) + hey(b, c); \n  printf("%d", result); \n return 0; \n }', hint: '<h3>Hint:</h3> hey(a,b) = 30',  
    solution: '<h3>Solution:</h3> hey(a,b) = 30. <br> hey(b,c) = 50. <br> 30 + 50 = 80', answer: '80' },

    { head: 'level 8' , questionImage: '#include <stdio.h> \n int main() \n { \n int x = 5; \n  x++ + ++x; \n printf("%d", x); \n return 0; \n }', hint: '<h3>Hint:</h3> x++ = 5 , x = 6 <br> ++x = 7 , x = 7.',  
     solution: '<h3>Solution:</h3> x++ = 5 , x = 6 <br> ++x = 7 , x = 7. <br> here, (x++ + ++x) its value is not assigned to any variable. <br> so, x = 7. ', answer: '7' },

    { head: 'level 9' , questionImage: '#include <stdio.h> \n int main() \n { \n  int i = 0, j = 0; \n while (i < 3) {  \n i++; \n j += i;\n } \n printf("%d", j); \n return 0; \n }', hint: '<h3>Hint:</h3> i = i + 1 <br> j = j + i ',  
     solution: '<h3>Solution:</h3> i = 1, j = 1 <br> i = 2, j= 1 + 2, <br> i = 3, j = 1+2+3. <br> A: 6.  ', answer: '6' },

    { head: 'level 10' ,questionImage: '#include <stdio.h> \n int main() \n { \n int n = 10, i = 1, sum = 0; \n  do { \n  sum += i; \n i++; \n  }  while (i <= n); \n printf("%d", sum); \n return 0; \n }', hint: '<h3>Hint:</h3>sum 0 → 10. ',  
     solution: '<h3>Solution:</h3> sum 0 → 10 = 55', answer: '55' },


     { head: 'level 11' , questionImage: '#include <stdio.h> \n void hello(int *a, int *b) { \n  int temp = *a; \n  *a = *b; \n    *b = temp; \n } \n\n int main() { \n int x = 10, y = 20; \n  hello(&x, &y); \n printf("%d %d", x, y);  \n return 0; \n }', hint: '<h3>Hint:</h3> a = b <br> b = a.', 
     solution: '<h3>Solution:</h3>swapping A and B. <br> Ans: 20 10', answer: '20 10' },
     

    { head: 'level 12' , questionImage: '#include <stdio.h> \n int main() { \n   int x = 5; \n x += x++ + ++x; \n printf("%d", x); \n  return 0; \n }', hint: '<h3>Hint:</h3> x++ = 5 and x = 6 <br> ++x = 7 and x = 7', 
     solution: '<h3>Solution:</h3> (x++ + ++x) <br> (5  +  7) =12. <br> X += 12, 7 +=12 = 19. <br> Ans: 19. ', answer: '19' },

    { head: 'level 13' , questionImage: '#include <stdio.h> \n int main() { \n int x = 3 \n  int y = (x-- > 2) ? (x-- > 2 ? 10 : 20) : 30; \n  printf("%d", y);  \n return 0; \n }', hint: '<h3>Hint:</h3>x-- = 3 but x = 2. <br> post decrement.', 
     solution: '<h3>Solution:</h3> x-- = 3 , x = 2 <br> x-- = 2, x = 1 <br> 2 > 2, false. <br> ans: 20'  , answer: '20' },

    { head: 'level 14' , questionImage: '#include <stdio.h> \n int main() { \n    int i; \n  for (i = 0; i < 5; i++) { \n  if (i == 3) \n break; \n  } \n printf("%d", i);  \n return 0; \n }', hint: '<h3>Hint:</h3> Focus on break.', 
     solution: '<h3>Solution:</h3> i == 3, break;  <br> Ans: 3.', answer: '3' } ,

    { head: 'level 15' , questionImage: '#include <stdio.h> \n #include <string.h> \n int main()\n {  \n char str1[10] =  "Hello"; \n char str2[10] = "World"; \n strcpy(str1 + 3, str2); \n printf("%s", str1); \n return 0; \n }', hint: '<h3>Hint:</h3> str1 = 0,', 
    solution: '<h3>Solution:</h3> till str[2] i.e "hel" is same. <br> then at str[3] str2 appends. <br> Ans: helworld' , answer: 'helworld' } ,

    { head: 'level 16' , questionImage: '#include <stdio.h> \n int main() { \n int a = 5, b = 10, c; \n   c = (a < b) ? a++ : b++; \n printf("%d", c); \n printf("%d", a);  \n return 0; \n } ', hint: '<h3>Hint:</h3> a++ = 5, b++ = 10.', 
    solution: '<h3>Solution:</h3>C = a++ = 5. <br> a = 6. <br> Ans: 5 6.', answer: '5 6' },

    { head: 'level 17' , questionImage: '#include <stdio.h> \n int main() { \n int i, sum = 0; \n for (i = 0; i < 5; i++) { \n if (i % 2 == 0) \n continue; \n sum += i; \n } \n printf("%d", sum);  \n return 0; \n }', hint: '<h3>Hint:</h3>if i = even number, <br> sum will not change', 
    solution: '<h3>Solution:</h3> i = 0, sum = 0 <br> i = 1, sum = 1 <br>i = 2, sum = 1 <br> i = 3, sum = 1 + 3 <br> i = 4 , sum = 4 <br> Ans: 4', answer: '4' },

   { head: 'level 18' , questionImage: '#include <stdio.h> \n int main() { \n int x = 5; \nx = (x++ > 5) ? \n (x++ > 6 ?  x  :  x + 2) : (x-- < 5 ?  x  :  x - 2); \n printf("%d", x); \n return 0; \n }', hint: '<h3>Hint:</h3> x++ = 5, 5 > 5, <br> condition fasle, enters 2nd statement.', 
    solution: '<h3>Solution:</h3> x-- = 5, 5 < 5 , <br> condition fasle, executes 2nd statement. <br> x = 5, x - 2 = 3.', answer: '3' } ,

   { head: 'level 19' , questionImage: 'int main() { \n int x = 2; \n switch (x) { \n  case 1: \n x += 2; \n case 2: \n x += 3 \n  case 3: \n x += 4; \n break; \n default: x += 5;    } \n printf("%d", x); \n return 0; \n }', hint: '<h3>Hint:</h3> Focus on break.', 
   solution: '<h3>Solution:</h3> x+= 3, x = 5 <br> x+= 4, 5+4 = 9<br> Ans: 9.', answer: '9' },

   {  head: 'level 20' , questionImage: '#include <stdio.h> \n int main() { \n int count = 0; \n  for (int i = 0; i < 10; i++) { \n if (i % 2 == 0) { \n for (int j = i; j < 10; j += 2) \n { \n count++; \n } \t } \t } \n printf("%d", count);  \n return 0; \n }', hint: '<h3>Hint:</h3> inner for loop runs only for even numbers. ',
   solution: '<h3>Solution:</h3> i = 0, j = 0 → 10, count = 5. <br> i = 2, j = 2 → 10, count = 4 <br> i = 4 , j = 4 → 10, count = 3 <br> i = 6, j = 6 → 10, count = 2 <br> i = 8, j = 8 → 10, count = 1 <br> Count = 5+4+3+2+1 = 15.' , answer: '15' }
];

let currentLevel = 0; // Start from level 0
let hintButtonClicked = false;
let solutionButtonClicked = false;

// Function to load level content
function loadLevel(level) {
  const questionImage = document.getElementById('question-image');
  questionImage.innerText = levels[level].questionImage;
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
    const completedLevelKey = `${currentGame}_completedLevel`;
    const completedLevel = parseInt(localStorage.getItem(completedLevelKey)) || 0;

    if (currentLevel < levels.length - 1) {
      currentLevel++;
      loadLevel(currentLevel);

      if (currentLevel > completedLevel) {
        localStorage.setItem(completedLevelKey, currentLevel);
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
  const levelIndexKey = `${currentGame}_levelIndex`;
  const levelIndex = parseInt(localStorage.getItem(levelIndexKey));
  if (!isNaN(levelIndex) && levelIndex >= 0) {
    currentLevel = levelIndex;
    loadLevel(levelIndex);
  } else {
    loadLevel(0);
  }
});
