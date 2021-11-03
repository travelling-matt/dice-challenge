let i = 0
let resetBtn = document.getElementById("resetBtn");
let player1 = document.getElementById("player1");
let score = document.getElementById("score");
let dice = document.getElementById("dice");
let rollBtn = document.getElementById("rollBtn");


document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key == "r" || e.key == "R") {
        let j = Math.ceil(Math.random()*6);
        console.log(j)
        if (j == 1) {
            player1.innerHTML = `<p>You lose :(<br>Press reset to try again</p>`;
        } else if (j == 2) {        
        dice.innerHTML = `<p>${j}</p>`;
        }
    }
});










rollBtn.addEventListener("click", () => {
    let j = Math.ceil(Math.random()*6);
    console.log(j)
    dice.innerHTML = `<p>${j}</p>`;
    /*document.getElementById("boom").pause();
    document.getElementById("boom").currentTime = 0;
    document.getElementById("boom").play();*/
})
