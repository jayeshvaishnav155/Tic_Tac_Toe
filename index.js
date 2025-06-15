var flag = true;
var state = [0, 1, 0, 0, 1, 1, 1, 0, 0];
var winner_div = document.getElementById("winner");
var player1_score = 0, player2_score = 0;
var winCount1 = 0, winCount2 = 0;
var user1 ="X", user2="O";

document.querySelector(".container").addEventListener('click', function (event) {
    var targeted_id = event.target.id;
    var targeted_div = document.getElementById(targeted_id);

    if (state[targeted_id] == 1 || state[targeted_id] == 0) // ye code box me ek time pe X ya O print ho isliye he, ye check kerta hai ki box me X ya O he to nahi  
    {
        if (flag) {
            targeted_div.innerText = "X";//isme targeted div me X ko insert kerte he
            state[targeted_id] = "X";// isme jo array ke targeted index pe X ko rakhta hai
        } else {
            targeted_div.innerText = "O";
            state[targeted_id] = "O";
        }
        // flag++;
        flag = !flag; // ye condition ko change kerta hai true to false and false o true [true = !true => false]
        checkWinner(!flag);
    }
    console.log(state);
});
console.log(state)

function checkWinner(player) {
    if (state[0] == state[1] && state[0] == state[2]) {
        // player ? winner_div.innerText = "Winner X" : winner_div.innerText = "Winner O";
        if (player) {
            winner_div.innerText = `Winner ${user1}`;
            ++winCount1;
        }
        else {
            winner_div.innerText = `Winner ${user2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(0, 1, 2);
        displayScore();
    }
    else if (state[3] == state[4] && state[3] == state[5]) {
        if (player) {
            winner_div.innerText = `Winner ${user1}`;
            ++winCount1;
        } else {
            winner_div.innerText = `Winner ${user2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(3, 4, 5);
        displayScore();
    }
    else if (state[6] == state[7] && state[6] == state[8]) {
        if (player) {
            winner_div.innerText = `Winner ${user1}`;
            ++winCount1;
        } else {
            winner_div.innerText = `Winner ${user2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(6, 7, 8);
        displayScore();
    }
    else if (state[0] == state[3] && state[0] == state[6]) {
        if (player) {
            winner_div.innerText = `Winner ${user1}`;
            ++winCount1;
        } else {
            winner_div.innerText = `Winner ${user2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(0, 3, 6);
        displayScore();
    }
    else if (state[1] == state[4] && state[1] == state[7]) {
        if (player) {
            winner_div.innerText = `Winner ${user1}`;
            ++winCount1;
        } else {
            winner_div.innerText = `Winner ${user2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(1, 4, 7);
        displayScore();
    }
    else if (state[2] == state[5] && state[2] == state[8]) {
        if (player) {
            winner_div.innerText = `Winner ${user1}`;
            ++winCount1;
        } else {
            winner_div.innerText = `Winner ${user2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(2, 5, 8);
        displayScore();
    }
    else if (state[0] == state[4] && state[0] == state[8]) {
        if (player) {
            winner_div.innerText = `Winner ${user1}`;
            ++winCount1;
        } else {
            winner_div.innerText = `Winner ${user2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(0, 4, 8);
        displayScore();
    }
    else if (state[2] == state[4] && state[2] == state[6]) {
        if (player) {
            winner_div.innerText = `Winner ${user1}`;
            ++winCount1;
        } else {
            winner_div.innerText = `Winner ${user2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(2, 4, 6);
        displayScore();
    }
    else {
        var x = 9;
        for (var i = 0; i < state.length; i++) {
            if (state[i] != 0 && state[i] != 1) {
                x--;
                console.log(x);
            }
        }

        if (x == 0) {
            winner_div.innerText = "It's Draw !!";
            for (var i = 0; i < state.length; i++) {
                // document.getElementById(i).style.backgroundColor ="yellowgreen";
                document.getElementById(i).style.color = "red";

            }
        }
    }
}
function setDisabled() {
    for (var i = 0; i < state.length; i++) {
        if (state[i] == 1 || state[i] == 0) {
            state[i] = null;
        }
    }
}

function applyWinningPattern(a, b, c) {
    document.getElementById(a).style.background = "cyan";
    document.getElementById(b).style.background = "cyan";
    document.getElementById(c).style.background = "cyan";
}

function reset() {

    // remove winning pattern and X or O
    for (var i = 0; i < state.length; i++) {
        document.getElementById(i).style.backgroundColor = "#1a689e";
        document.getElementById(i).innerText = "";
        document.getElementById(i).style.color = "white";
    }

    // set to initial value:
    state = [0, 1, 0, 0, 1, 1, 1, 0, 0];

    flag = true;

    winner_div.innerText = "";
}
function restart(event) {
    location.reload();
   }



function displayScore() {
    if (winCount1 > 0 || winCount2 > 0) {
        document.querySelector('#p1-score').innerText = winCount1;
        document.querySelector('#p2-score').innerText = winCount2;
    }
}
function start_game_with_name() {
    user1 = document.getElementById("p1").value;
    user2 = document.getElementById("p2").value;
    if (user1.length != 0 && user2.length != 0) {

        document.querySelector(".game").style.display = "block";
        document.querySelector(".Start_page").style.display = "none";

       document.querySelector('#player1').innerHTML = `${user1} : <span id="p1-score">${winCount1}</span>`; //problem 1 
       document.querySelector('#player2').innerHTML = `${user2} : <span id="p2-score">${winCount2}</span>`; //problem 1


        displayScore();
        // document.querySelector(".game").scrollIntoView({behavior: 'smooth'});
    }
    else {
        alert("Plesase Fill the above inputs!");
    }
}   

function start_game_without_name() {
    document.querySelector(".game").style.display = "block";
    document.querySelector(".Start_page").style.display = "none";


    // document.querySelector(".game").scrollIntoView({behavior: 'instant'});
}