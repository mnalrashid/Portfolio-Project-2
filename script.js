let tableData = [];
let answer = [];
let randomNumbers = [];
let tableRow = [];
let cellDataArray = [];
let userAnswer = [];

const tableObj = document.getElementById('table');
const submitBtnObj = document.getElementById('submitBtn');

function genAnswer() {
    for (let i = 0; i < 5; i++) {
        let ranNumber = Math.floor(Math.random() * 10);
        while (answer.includes(ranNumber)) {
            ranNumber = Math.floor(Math.random() * 10);
        }
        answer[i] = ranNumber;
    }
}

function loadLines() {
    for (let i = 1; i < 6; i++) {
        for (let j = 1; j < 6; j++) {
            let ranNumber = Math.floor(Math.random() * 10);
            while (answer.includes(ranNumber)) {
                ranNumber = Math.floor(Math.random() * 10);
            }
            tableObj.rows[i].cells[j].innerText = ranNumber;
        }
    }
}

function printLines() {
    for (let i = 1; i < 6; i++) {
        for (let j = 0; j < 6; j += 6) {
            if (i === 1) {
                tableObj.rows[i].cells[j].innerText = '3 are correct and wrong placed: ';
                for (j = 1; j < 6; j++) {
                    if (j === 2) {
                        tableObj.rows[i].cells[j].innerText = answer[4];
                    } else if (j === 4) {
                        tableObj.rows[i].cells[j].innerText = answer[2];
                    } else if (j === 5) {
                        tableObj.rows[i].cells[j].innerText = answer[0];
                    }
                }
            } else if (i === 2) {
                tableObj.rows[i].cells[j].innerText = '2 are correct and well placed: ';
                for (j = 1; j < 6; j++) {
                    if (j === 2) {
                        tableObj.rows[i].cells[j].innerText = answer[1];
                    } else if (j === 5) {
                        tableObj.rows[i].cells[j].innerText = answer[4];
                    }
                }
            } else if (i === 3) {
                tableObj.rows[i].cells[j].innerText = '3 are correct and 1 wrong placed: ';
                for (j = 1; j < 6; j++) {
                    if (j === 1) {
                        tableObj.rows[i].cells[j].innerText = answer[0];
                    } else if (j === 2) {
                        tableObj.rows[i].cells[j].innerText = answer[1];
                    } else if (j === 3) {
                        tableObj.rows[i].cells[j].innerText = answer[3];
                    }
                }
            } else if (i === 4) {
                tableObj.rows[i].cells[j].innerText = '2 are correct and 1 well placed: ';
                for (j = 1; j < 6; j++) {
                    if (j === 2) {
                        tableObj.rows[i].cells[j].innerText = answer[3];
                    } else if (j === 4) {
                        tableObj.rows[i].cells[j].innerText = answer[4];
                    }
                }
            } else if (i === 5) {
                tableObj.rows[i].cells[j].innerText = 'Nothing correct: ';
            }
        }
    }
}

function getAnswer() {
    userAnswer = [];
    for (var i = 0, row; (row = tableObj.rows[i]); i++) {
        var rowValues = [];
        for (var j = 1, cell; (cell = row.cells[j]); j++) {
            var inputElement = cell.querySelector('input[type="text"]');
            if (inputElement) {
                let intRowValues = parseInt(inputElement.value, 10);
                userAnswer.push(intRowValues);
            }
        }
    }
}

function renameSubmit() {
    submitBtnObj.innerHTML = 'Submit';
}

function renameFailed() {
    submitBtnObj.innerHTML = 'Try Again';
}

function checkResult() {
    if (answer.every((value, index) => value === userAnswer[index])) {
        alert('Great, You guessed the number!!');
        submitBtnObj.innerHTML = 'Guess again.';
    }
    else {
        tableObj.rows[6].cells[0].innerText = 'Correct Numbers are: ';
        for (let i = 1; i < 6; i++) {
            tableObj.rows[6].cells[i].innerText = answer[i - 1];
        }
        alert('Sorry, that was not the correct number. Try again!');
        renameFailed();
    }
}

function gameStart() {
    genAnswer();
    loadLines();
    printLines();
}

window.onload = gameStart();

submitBtnObj.addEventListener('click', () => {
    if(submitBtnObj.innerHTML === 'Submit'){
        getAnswer();
        checkResult();
    }
    else{
        location.reload(true);
    }
});
