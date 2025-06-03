// Constants for games
const GAMES = {
  C_SNIPPETS: 'c_snippets',
  MATH_PUZZLES: 'math_puzzles',
  JAVA_SNIPPETS: 'java_snippets'
};

// Select the current game (example: GAMES.C_SNIPPETS)
let currentGame = GAMES.JAVA_SNIPPETS;

const levels = [
  { head: 'level 1', questionImage: ' public class hello \n { \n public static void main(String[] args){ \n int a = 5 , b = 10;, \n if (a < b) \n { \nif (b > 15) { \n  System.out.println("1"); \n  } else { \n   System.out.println("0"); \n } \n } 	else { \n System.out.println("000"); \n } } }',   hint:  '<h3>Hint:</h3>  10 > 5, false', 
    solution: '<h3>Solution:</h3> 10 > 5, false <br> Ans: 0.', answer: '0' },

    { head: 'level 2', questionImage: '  public class hello \n { \n public static void main(String[] args){ \n int a = 5; \n int b = 10; \n if (a > b || (a + 5 == b && b - 5 == a)) \n System.out.println("1"); \n else  \n System.out.println("0"); \n } \n } ' , hint: '<h3>Hint:</h3> OR statement. <br> Any 1 condition true, OR is true.',
     solution: '<h3>Solution:</h3> here condition is true <br> Ans: 1.', answer: '1' },

    { head: 'level 3' , questionImage: 'public class hello { \n public static void main(String[] args) \n { \n int n1 = 5; \n int n2 = 10; \n float s = n1 + n2; \n System.out.println( s); \n } \n }', head: 'level 3' , hint: ' <h3>Hint:</h3> Ans stores in a <u>float</u> variable',  
     solution: "<h3>Solution:</h3> 5 + 10 =15, <br> Ans: 15.0" , answer: '15.0' },

    { head: 'level 4' , questionImage: ' public class hello { \n public static void main(String[] args) \n { \n int a = 5; \n int b = ++a; \n System.out.println( a); \n System.out.println( b); \n } \n }',  hint: '<h3>Hint:</h3> Pre increment', 
    solution: '<h3>Solution:</h3>++a = 6, b = 6. <br> Ans: 6 6', answer: '6 6' },

    { head: 'level 5' ,questionImage: 'public class hello { \n public static void main(String[] args) { \n int x = 7; \n int y = 0; \n if (x > 10) \n y \n 10 - x; \n else \n y = 5*x; \n System.out.println(y); \n } \n }', hint: '<h3>Hint:</h3>  7 > 10, false' ,  
     solution: '<h3>Solution:</h3> 7 > 10, false <br> y = 5*x = 35 <br> Ans: 35 ', answer: '35' },

    { head: 'level 6' , questionImage: 'public class hello {\npublic static void main(String[] args) {\nint[] numbers = {1, 2, 3, 4, 5};\nfor (int number : numbers) {\nSystem.out.print(number);\n}\n}\n}', hint: '<h3>Hint:</h3> ptints the values stored in array.',  
    solution: '<h3>Solution:</h3> Ans: 12345', answer: '12345' } ,

    { head: 'level 7' , questionImage: 'public class hello {\npublic static void main(String[] args) {\nint x = 5;\nint y = 10;\nboolean result = (x >= 5) && (y <= 20);\nSystem.out.println(result);\n}\n}', hint: '<h3>Hint:</h3> Boolean stores either <u>true</u> or <u>fasle</u>',  
    solution: '<h3>Solution:</h3> Ans: true', answer: 'true' },

    { head: 'level 8' , questionImage: 'public class hello {\npublic static void main(String[] args) {\nint a = 6;\nboolean b = (a++ == 7);\nSystem.out.println(b);\n}\n}', hint: '<h3>Hint:</h3> a++ = 6, a= 7.',  
     solution: '<h3>Solution:</h3> a++ = 6, (6==7) false <br> Ans: false', answer: 'false' },

    { head: 'level 9' , questionImage: 'int x = 10;\nif (x < 5) \nSystem.out.println("Less than 5");\nelse \nswitch (x) {\ncase 5:\nSystem.out.println("Equal to 5");\nbreak;\ncase 10:\nSystem.out.println("Equal to 10");\nbreak;\ndefault:\nSystem.out.println("Greater than 10");\n}', hint: '<h3>Hint:</h3> Focus on x=10 ',  
     solution: '<h3>Solution:</h3> switch(10), case 10. <br> Ans: equal to 10 ', answer: 'equal to 10' },

    { head: 'level 10' ,questionImage: 'public class hello {\npublic static void main(String[] args) {\n//h=104\nchar c = h;\nint av = (int) c-24;\nSystem.out.println(av);\n}\n}', hint: '<h3>Hint:</h3> Ascii value of h = 104. ',  
     solution: '<h3>Solution:</h3> 104 - 24 = 80 <br> Ans: 80', answer: '80' },





    { head: 'level 11' , questionImage: 'public class hello {\npublic static void main(String[] args)\n{\nString str1 = new String("Hello");\nString str2 = new String("Hello");\nboolean ans1 = (str1 == str2);\nboolean ans2 = str1.equals(str2);\nSystem.out.println(ans1);\nSystem.out.println(ans2);\n//which is correct and which is false?\n}\n}', hint: '<h3>Hint:</h3> (==) in java comapares the addresses.', 
     solution: '<h3>Solution:</h3> (==) false <br> (==) compares the address. <br>Ans: false true', answer: 'false true' },
     

    { head: 'level 12' , questionImage: 'public class hello {\npublic static void main(String[] args)\n{\nint result = add(3,7 );\nSystem.out.println(result);\n}\npublic static int add(int a, int b) {\nreturn a % b;\n}\n}', hint: '<h3>Hint:</h3> % (modulus) returns the remainder.', 
     solution: '<h3>Solution:</h3> a % b = 3 % 7. <br> Ans: 3', answer: '3' },

    { head: 'level 13' , questionImage: 'public class hello{\npublic static void main(String[] args)\n{\nint a=10;\nint b=11;\nint c= ++b + a--;\nSystem.out.println(c);\n}\n}', hint: '<h3>Hint:</h3> --a = 10.', 
     solution: '<h3>Solution:</h3> ++b = 12, --a = 10 <br> 12 + 10 = 22'  , answer: '22' },

    { head: 'level 14' , questionImage: 'boolean isRaining = false;\nboolean isWeekend = true;\nif (isRaining && isWeekend) {\nSystem.out.println("work");\n}\nelse if (!isRaining && isWeekend) {\nSystem.out.println("relax");\n}\n}\nelse {\nSystem.out.println("Normal workday");\n}', hint: '<h3>Hint:</h3> If both are true, AND is true', 
     solution: '<h3>Solution:</h3> !isRaining = true and isWeekend = true, <br> Ans: relax', answer: 'relax' } ,

    { head: 'level 15' , questionImage: 'class hello{\npublic static void main(String[] args) {\nint a=10;\nint b=11;\nint c= (a*b)- b-- + (a-26);\nSystem.out.println(c);\n}\n}', hint: '<h3>Hint:</h3> b-- = 11.', 
    solution: '<h3>Solution:</h3> (a * b) = 110 <br> b-- = 11 <br> (a - 26) = -16<br> 110 - 11 - 16 = 83' , answer: '83' } ,

    { head: 'level 16' , questionImage: 'class hello{\npublic static void main(String[] args){\nint n = 4;\nint a = 0, b = 1;\nfor (int i = 1; i <= n; i++) {\nSystem.out.print(a + " ");\nint sum = a + b;\na = b;\nb = sum;\n}\n}\n} ', hint: '<h3>Hint:</h3> fibonicci', 
    solution: '<h3>Solution:</h3> Its a program of fibonicci series <br> n = 4, <br> ans: 0 1 1 2', answer: '0 1 1 2' },

    { head: 'level 17' , questionImage: 'public class hello {\npublic static void main(String[] args)\n{\nString str = "";\nboolean isEmpty = str.isEmpty();\nSystem.out.println(isEmpty);\n\nstr = null;\nboolean isNull = (str == null);\nSystem.out.println(isNull);\n}\n}', hint: '<h3>Hint:</h3> if theres no content, isEmpty = true.', 
    solution: '<h3>Solution:</h3> isEmpty = true <br> isNull = true <br> Ans: true true', answer: 'true true' },

   { head: 'level 18' , questionImage: 'int month = 8;\nString monthString;\nswitch (month) {\ncase 1: case 2: case 3:\nmonthString = "ONE";  break;\ncase 4: case 5: case 6:\nmonthString = "TWO";  break;\ncase 7: case 8: case 9:\nmonthString = "THREE"; break;\ncase 10: case 11: case 12:\nmonthString = "FOUR"; break;\ndefault:\nmonthString = "NONE"; break; } \nSystem.out.println(monthString);', hint: '<h3>Hint:</h3> Any 1 case in 3 matches, then thats final', 
    solution: '<h3>Solution:</h3> case 8 matches. <br> Ans: three', answer: 'three' } ,

   { head: 'level 19' , questionImage: 'public class hello {\n    public static void main(String[] args) {\n int a = 4; \n  int b = 3; \n a |= b;\n  System.out.println(a);\n    }\n}', hint: '<h3>Hint:</h3> a|=b, binary addition happens here', 
   solution: '<h3>Solution:</h3> Binary addition of a & b is stored again in a. <br> bcoz of pipe operator. <br> Ans: 7. ', answer: '7' },

   {  head: 'level 20' , questionImage: 'public class Example2 {\n public static void main(String[] args) {\n String str = "abcdef";\n  String result = "";\n  for (int i = str.length() - 1; i >= 0; i -= 2) {\n  result += str.charAt(i);\n  }\n System.out.println("Result: " + result);\n    }\n}', hint: '<h3>Hint:</h3> for loop targets on the position 5 3 & 1. ',
   solution: '<h3>Solution:</h3> It extracts the characters <br> present at pos 5 3 & 1.  <br> Ans: fdb  ' , answer: 'fdb' }
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
