document.addEventListener("readystatechange", (e) => {
    if (document.readyState === "interactive") {
        initXX();
    }
});

var previousElm;

function initXX() {
    makeBoard();
    getElements();
}

function makeBoard() {
    board = [
        ["A", "C", "E", "E"],
        ["F", "D", "B", "D"],
        ["H", "A", "G", "F"],
        ["B", "G", "C", "H"]
    ];
}

function squareClicked(e) {
    let previousLetter = "";
    if (previousElm != undefined) {
        previousLetter = previousElm.innerText;
    }
    const id = e.target.id;
    e.target.innerText = board[convertLetter(id[0])][convertNumber(id[1])];
    if (e.target.innerText == previousLetter) {
        previousElm = undefined;

    }
    else if (previousElm == undefined) {
        previousElm = e.target;
    }
    else {
        window.setTimeout(() => {
            e.target.innerText = "";
            previousElm.innerText = "";
            previousElm = undefined;
        }, 500);
    }
}

function convertLetter(char) {
    switch(char) {
        case "a":
            return 0;
        case "b":
            return 1;
        case "c":
            return 2;
        case "d": 
            return 3;
    }
}

function convertNumber(numStr) {
    return parseInt(numStr) - 1;
}

function getElements() {
    sqA1 = document.getElementById("a1");
    sqA1.addEventListener("click", squareClicked);
    sqA2 = document.getElementById("a2");
    sqA2.addEventListener("click", squareClicked);
    sqA3 = document.getElementById("a3");
    sqA3.addEventListener("click", squareClicked);
    sqA4 = document.getElementById("a4");
    sqA4.addEventListener("click", squareClicked);
    sqB1 = document.getElementById("b1");
    sqB1.addEventListener("click", squareClicked);
    sqB2 = document.getElementById("b2");
    sqB2.addEventListener("click", squareClicked);
    sqB3 = document.getElementById("b3");
    sqB3.addEventListener("click", squareClicked);
    sqB4 = document.getElementById("b4");
    sqB4.addEventListener("click", squareClicked);
    sqC1 = document.getElementById("c1");
    sqC1.addEventListener("click", squareClicked);
    sqC2 = document.getElementById("c2");
    sqC2.addEventListener("click", squareClicked);
    sqC3 = document.getElementById("c3");
    sqC3.addEventListener("click", squareClicked);
    sqC4 = document.getElementById("c4");
    sqC4.addEventListener("click", squareClicked);
    sqD1 = document.getElementById("d1");
    sqD1.addEventListener("click", squareClicked);
    sqD2 = document.getElementById("d2");
    sqD2.addEventListener("click", squareClicked);
    sqD3 = document.getElementById("d3");
    sqD3.addEventListener("click", squareClicked);
    sqD4 = document.getElementById("d4");
    sqD4.addEventListener("click", squareClicked);
}