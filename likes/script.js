var counterVal = 0;

function incrementClick() {
    updateLikes(++counterVal);
}

function updateLikes(val) {
    document.getElementById("likes").innerHTML = val;
}



var counter = 0;

function incrementClick0() {
    updateLikes0(++counter);
}

function updateLikes0(valu) {
    document.getElementById("likes0").innerHTML = valu;
}

var count = 0;

function incrementClick1() {
    updateLikes1(++count);
}

function updateLikes1(num) {
    document.getElementById("likes1").innerHTML = num;
}