  var tmr = document.getElementById("tmRmn");
  var tmr2 =  document.getElementById("tmDsp");
  var tmrInt;
  var sec = 75;
  var finScr = 0;
  var currQuestIndx = 0;
  var whchBtn = document.getElementById("allBtn");
  var whchBtn2 = document.getElementById("quizContents");
  console.log(whchBtn2);

  var qList = [
  {question: "What keyword creates a variable?",
  choices: {a: "var", b:"h3", c:"function", d:"None of the above"},
  answer: "a"
  },

  {question: "What is a CSS file?",
  choices: {a:"A file that creates web recipes", b:"A file that contains style information.", c: "A file that is a Python container.", d:"Another type of excel file."},
  answer: "b"
  },

  {question: "What is the file suffix for javascript",
  choices: {a:"jv", b:"ja", c:"jj", d:"js"},
  answer: "d"
  },

  {question: "Which command sequence increments a variable called i",
  choices: {a:"i+=", b:"i+-", c:"i++", d:"i=="},
  answer:"c"
  },

  {question: "What does the 'head' section often contain",
  choices: {a:"beta data", b:"meta data", c:"conscript data", d: "asset data"},
  answer:"b"
  },

  {question: "Which git command updates repository data in your local machine?",
  choices: {a:"git pull", b:"git shove", c:"git push", d:"get stash"},
  answer:"a"}
];

 // listen for answers
whchBtn2.addEventListener("click", function(e) {
    e.preventDefault();
    var currQuest = qList[currQuestIndx];

    if(e.target.matches("button") && e.target.classList.contains('qbtn')){
      ans = e.target.id;
      console.log(ans);
        if(ans !== currQuest.answer){
          console.log("Incorrect")
          document.getElementById("correctWrong").textContent = "Wrong!"
          sec-=10;
        } else {
          document.getElementById("correctWrong").textContent = "Correct!"  
        }
        currQuestIndx++;
        if(currQuestIndx<qList.length){
        dispQuest();
        } else{
          finScr = sec;
          clearInterval(tmrInt);
          scrPg();
        }


      }
    }
  );

  function getScore(){
    var myInit = document.getElementById("entInit").value.toUpperCase().trim();
    console.log(myInit);
    console.log(finScr);
    // get the high score object if it exists
    var scores = JSON.parse(localStorage.getItem("scores"));
    console.log(scores);
    if(scores === null){
      scores ={};
      scores[[myInit]] = finScr;
      console.log("Added new pair");
      console.log(scores);
    } else {
      // if your new score is higher or you've never played, add score
      if(scores[[myInit]]<finScr || scores[[myInit]]==null){
        scores[[myInit]] = finScr;
      }
    }
    localStorage.setItem("scores", JSON.stringify(scores));
    document.getElementById("entInit").value = "";
    highScore();
  }

  function setTime(){
  tmrInt = setInterval(function(){
    sec--;
    tmr.textContent = sec;

    if(sec<=0){
      clearInterval(tmrInt)
      scrPg();
    }
  } ,1000);
}

function dispQuest(){
  var currQuest = qList[currQuestIndx];
  console.log(currQuestIndx);

  document.getElementById("qState").innerHTML = currQuest.question;
  document.getElementById("a").innerHTML = currQuest.choices.a;
  document.getElementById("b").innerHTML = currQuest.choices.b;
  document.getElementById("c").innerHTML = currQuest.choices.c;
  document.getElementById("d").innerHTML = currQuest.choices.d;

}

// Start the Challenge
function strtChlng(){
  //set up pages
  document.getElementById("scorePage").style.display="none";
  document.getElementById("splashPage").style.display="none";
  document.getElementById("highScore").style.display="none"
  document.getElementById("quizContents").style.display="contents";
 
  // Re initialize

  sec = 10000;
  finScr = 0;
  currQuestIndx = 0;
  document.getElementById("quizContents").style.display="contents";
  //start the timer
  setTime();
  dispQuest();
}
// end of challenge
function scrPg(){
  document.getElementById("splashPage").style.display="none";
  document.getElementById("quizContents").style.display="none";
  document.getElementById("scorePage").style.display="contents";
  document.getElementById("scrNum").textContent = finScr;
  document.getElementById("tmDsp").textContent = finScr;
  document.getElementById("scrNum").textContent = "Your final score is " + finScr;
}

function renderList(scores){
  document.getElementById("hsList").innerHTML = "";
  for(var j=0; j<Object.keys(scores).length; j++){
    console.log(j);
    var myOL = document.getElementById("hsList");
    var newLI = document.createElement("li");
    lstInits = Object.keys(scores);
    lstScrs = Object.values(scores);
    var textOfLI = document.createTextNode(lstInits[j] + " - " + lstScrs[j]);
    newLI.setAttribute("style", "background-color : #C8A2C8; margin : 1% 0 1% 0");
    newLI.appendChild(textOfLI);
    myOL.appendChild(newLI);
  }
}


// display all high scores with option to clear and start over
function highScore(){
  document.getElementById("splashPage").style.display="none";
  document.getElementById("quizContents").style.display="none";
  document.getElementById("scorePage").style.display="none";
  document.getElementById("highScore").style.display="contents";
  var scores = JSON.parse(localStorage.getItem("scores"));
  console.log("printing scores in highScore");
  console.log(scores);
  console.log(Object.keys(scores));
  console.log(Object.values(scores));
  renderList(scores);
}

// clear the memory, wipe the children and re-render
function clearScores(){
  // clear memory
  localStorage.removeItem("scores");
  // wipe all children

  document.getElementById("hsList").innerHTML = "";

  //re-render list
 
}