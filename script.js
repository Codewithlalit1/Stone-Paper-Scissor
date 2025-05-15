function getComputerInput(){
    let temp = Math.random();
    if(temp*10>=0 && temp*10 < 3.33){
        return "stone";
    }
    else if(temp*10>=3.33 && temp*10 < 6.66){
        return "paper";
    }
    else{
        return "scissor"
    }
}

let userinput;
let ComputerTurn;

function GetUserInput(id){
    userinput = document.getElementById(id).innerText;
    userinput = userinput.toLowerCase();
    console.log(userinput);
    winnerdeclare = document.getElementById('result');
    opponentChoose = document.getElementById('opponent');
    let winner = GetWinner();
    opponentChoose.innerText = "Opponent choosed : "+ComputerTurn;
    winnerdeclare.innerText = "Result : "+winner;
    console.log(winner);
}

function GetWinner(){
     ComputerTurn = getComputerInput();
    console.log("Computer choose : " + ComputerTurn);
    if(userinput =="paper" && ComputerTurn =="scissor"){
        return "You Loss!";
    }
    else if(userinput =="stone" && ComputerTurn =="paper"){
        return "You Loss!";
    }
    else if(userinput =="scissor" && ComputerTurn =="stone"){
        return "You Loss!";
    }
    else if(userinput =="scissor" && ComputerTurn =="paper"){
        return "You Win!";
    }
    else if(userinput =="paper" && ComputerTurn =="stone"){
        return "You Win!";
    }
    else if(userinput =="stone" && ComputerTurn =="scissor"){
        return "You Win!";
    }
    else{
        return "Draw";
    }
}

// console.log(GetWinner());