const score= JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
updateScore();

function playGame(playerMove){
    let result='';
    const computerMove=pickComputerMove();
    if (playerMove==='paper'){
        if(computerMove==='paper'){
            result= 'tie';
        }
        else if(computerMove==='rock'){
            result= 'win';
        }
        else if(computerMove==='scissors'){
            result= 'loss';
        }
    }

    else if(playerMove==='rock'){
        if(computerMove==='paper'){
            result= 'loss';
        }
        else if(computerMove==='rock'){
            result= 'tie';
        }
        else if(computerMove==='scissors'){
            result= 'win';
        }
    }

    else if(playerMove==='scissors'){
        if(computerMove==='paper'){
            result= 'win';
        }
        else if(computerMove==='rock'){
            result= 'loss';
        }
        else if(computerMove==='scissors'){
            result= 'tie';
        }
    }

    if(result==='win'){
        score.wins+=1;
    }
    else if(result==='loss'){
        score.losses+=1;
    }
    else if(result==='tie'){
        score.ties+=1;
    }
    
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    console.log(score);
    console.log(result);
    document.querySelector('.js-result').innerHTML=`${result}`;
    showMoves(playerMove,computerMove);
    // alert(`computer chose ${computerMove} It is a ${Result}.\nWins:${score.wins} Losses:${score.losses} Ties:${score.ties}`);
}



function pickComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}
function resetScore(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScore();
}

function showMoves(playerMove,computerMove){
    document.querySelector('.js-moves').innerHTML = `Computer <img class="js-move-icon" src="${computerMove}-emoji.png"> You <img class="js-move-icon" src="${playerMove}-emoji.png">`;
}

let isAutoPlaying = false;
let intervalId;

//const autoPlay = () => {

//};
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;   
    document.querySelector('.js-auto').innerHTML='Stop Auto Play'
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-auto').innerHTML='Auto Play'
  }
}
