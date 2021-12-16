const p1button=document.querySelector('#p1button');
const p2button=document.querySelector('#p2button');
const resetButton=document.querySelector('#resetbutton');
const p1Display=document.querySelector('#p1Display')
const p2Display=document.querySelector('#p2Display')
const winScoreSelect=document.querySelector('#playto')

let p1Score=0;
let p2Score=0;
let winScore=3;
let isGameOver=false;


p1button.addEventListener('click', function(){
    if(!isGameOver){
        p1Score+=1;
        if(p1Score===winScore){
            isGameOver=true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
    }
    p1Display.textContent=p1Score;
    
    // p1Display.innerHTML=p1Score;           // This also work for updating scores
    
})

p2button.addEventListener('click', function(){
    if(!isGameOver){
        p2Score+=1;
        if(p2Score===winScore){
            isGameOver=true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
    }
        p2Display.textContent=p2Score;
    
    // p1Display.innerHTML=p1Score;           // This also work for updating scores

})


winScoreSelect.addEventListener('change', function(){
    winScore= parseInt(this.value);
    reset();
})


resetButton.addEventListener('click', reset)

function reset(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('loser', 'winner');
}
