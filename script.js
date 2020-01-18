var qList = [
      {question: "What keyword creates a variable?",
      choices: [["var", true], ["h3", false], ["function", false], ["None of the above", false]]
      },

      {question: "What is a CSS file?",
      choices: [["A file that creates web recipes", false], ["A file that contains style information.", true], ["A file that is a Python container.", false], ["Another type of excel file.", false]]
      },

      {question: "What is the file suffix for javascript",
      choices: [["jv",false],["ja", false],["jj", false],["js",true]],
      },

      {question: "Which command sequence increments a variable called i",
      choices: [["i+=", false],["i+-", false],["i++", true],["i==", false]]
      },

      {question: "What does the 'head' section often contain",
      choices: [["beta data", false], ["meta data", true], ["conscript data", false], ["asset data", false]]
      },

      {question: "Which git command updates repository data in your local machine?",
      choices: [["git pull", true], ["git shove", false], ["git push", false], ["get stash", false]]
      }
    ];

    function randDisp() {
        q = [0,1,2,3];
        for (i=q.length-1; i>0; i--){
          j = Math.floor(Math.random()*i);
          temp = q[i];
          q[i] = q[j];
          q[j] = temp;
        };
        return q;
      }

    /*randomize the order of the questions*/

      rIndx = randDisp();
      console.log(rIndx);
      
