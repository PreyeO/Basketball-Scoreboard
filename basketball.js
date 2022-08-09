let score=0;
let homeScore= document.getElementById('display')
let guestScore=document.getElementById('showcase')
function buttonOne() {
score+=1;
homeScore.textContent=score;
}
function buttonTwo() {
  score+=2;
  homeScore.textContent=score;
  }function buttonThree() {
    score+=3;
    homeScore.textContent=score;
    }
    function buttonOnes() {
      score=0
      score+=1;
      guestScore.textContent=score;
      }
      function buttonTwos() {
        score+=2;
        guestScore.textContent=score;
        }
        function buttonThrees() {
          score+=3;
          guestScore.textContent=score;
          }
          function resetButtons() {
            score=0;
            guestScore.textContent= score;
            homeScore.textContent=score;
            }
          