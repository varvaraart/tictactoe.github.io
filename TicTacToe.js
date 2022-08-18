var move="X";
var arr = [
    "", "", "",
    "", "", "",
    "", "", ""
];
var win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

function button(s) {
    s.innerHTML = move;
    s.style.cursor="default"
    s.onclick="";
    arr[s.id]=move;
     if (move=="X") {
        move="O";
        s.style.color = "rgb(11, 134, 0)";
    }
    else {
        move="X";
        s.style.color = "rgb(195, 0, 255)";
    }
    document.getElementById("movespan").innerHTML=move;
    checkWinner();
}

function startGame() {
    move="X";
    for (let i = 0; i < 9; i++) {
        el = document.getElementById(i);
        el.innerHTML = ""; //arr[i];
        el.onclick = function() {button(this)};
        el.style.color = "black";
        el.style.cursor = "pointer";
    }
}

function checkWinner() {
    for (let i = 0; i < 8; i++) {
        if (arr[win[i][0]]==arr[win[i][1]] &&
            arr[win[i][1]]==arr[win[i][2]]
            ) {
            if (arr[win[i][0]]!="")
                {document.getElementById("movespan").innerHTML = "Победил: " + arr[win[i][0]];
                document.getElementById(win[i][0]).style.backgroundColor="rgb(148, 0, 206)";
                document.getElementById(win[i][1]).style.backgroundColor="rgb(148, 0, 206)";
                document.getElementById(win[i][2]).style.backgroundColor="rgb(148, 0, 206)";
                }
        }

    }
}