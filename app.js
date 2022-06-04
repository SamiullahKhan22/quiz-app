const firebaseConfig = {
    apiKey: "AIzaSyDowOD-RUISiRknV2u1eDXZ0f1VciijyCI",
    authDomain: "quiz-app-509de.firebaseapp.com",
    projectId: "quiz-app-509de",
    storageBucket: "quiz-app-509de.appspot.com",
    messagingSenderId: "586200715887",
    appId: "1:586200715887:web:c31213754145234c42b39a",
    measurementId: "G-W051N3JPGG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function check(){
      var score = 0
      var right_answer_1 = document.getElementById('q1-a1'); 
      var q2_answer_1 = document.getElementById('q1-a2');
      var q3_answer_1 = document.getElementById('q1-a3');
      var q4_answer_1 = document.getElementById('q1-a4');
      if (right_answer_1.checked == true){
          score++
          alert('Q1 answer right')
      }
      else{
          alert('Q1 answer wrong');
      }

   
      var right_answer_2 = document.getElementById("q2-a4");
      var q2_answer_2 = document.getElementById("q2-a1");
      var q3_answer_2 = document.getElementById("q2-a2");
      var q4_answer_2 = document.getElementById("q2-a3");

      if (right_answer_2.checked == true){
          score ++
          alert("Q2 answer right")
      } 
      else{
          alert("Q2 answer wrong");
      } 


      var right_answer_3 = document.getElementById("q3-a1");
      var q3_answer_3 = document.getElementById("q3-a2");
      var q3_answer_3 = document.getElementById("q3-a3");
      var q3_answer_3 = document.getElementById("q3-a4");

      if (right_answer_2.checked == true){
          score++
      alert("Q3 answer right")
    }
    else{
        alert("Q3 answer wrong");
    } 
    // alert(` your score is${score++} / 4 `)

  }