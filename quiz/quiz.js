const quizQuestions = [
    {
      description:
        "A ninja with a dream of becoming the strongest ninja and leader of his village.",
      answer: "Naruto",
      point: 5,
      coverImg : "https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg",
      character : "https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png"
    },
    {
      description:
        "A high school student who gains the powers of a death god and uses them to bring justice.",
      answer: "Death Note",
      point: 10,
      coverImg : "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      character : "./assets/img/death.png"
    },
    {
      description:
        "A group of friends embark on an adventure to find a mysterious treasure.",
      answer: "One Piece",
      point: 2,
      coverImg:"https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg",
      character : "./assets/img/onePiece.png.png"
    },
  ];
let index=0
document.getElementById("next").disabled=true
function displayfunction(){
  let descriptionquestion=quizQuestions[index]
  document.getElementById("question").innerText=descriptionquestion.description
  document.getElementById("cover").src=descriptionquestion.coverImg
  document.getElementById("character").src=descriptionquestion.character
}
displayfunction()

function indexplus(){
  if (index<quizQuestions.length) {
    index++
    document.getElementById("next").disabled=true
    console.log(index)
  }else{
    alert('Game over')
    console.log(index)
  }
  
displayfunction()
}
document.getElementById('submitAnswer').addEventListener('click', function() {
  let userAnswer = document.getElementById('answer').value.toLowerCase();
  let correctAnswer= quizQuestions[index].answer.toLowerCase();
  let points= quizQuestions[index].point;

  

  
if (correctAnswer === userAnswer) {
      document.getElementById('answer').value = ''; 
      score+=points
      alert('Correct answer')
      document.getElementById("next").disabled=false
document.getElementById("score").innerText=score

  } else {
      alert('Incorrect answer, try again!');
  }
});
displayfunction();
let score=0
document.getElementById("score").innerText=score

