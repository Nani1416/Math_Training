console.log("HII");
let operators = ['+', '*', '-', '%'];
let random_numbers = [9, 1, 23, 36];
let play_button = document.querySelector(".play");
let result_button = document.querySelector(".result");
let h2=document.querySelector(".ans");
let options = document.querySelectorAll(".option1");
let operator = document.querySelector(".operator");
let operand1 = document.querySelector(".operand1");
let operand2 = document.querySelector(".operand2");

play_button.addEventListener("click", () => {
    h2.innerHTML="";
    for(let i=0;i<options.length;i++){
        options[i].style.backgroundColor='black';
        options[i].style.color='white';
    }
    questionGenerate();
});

let original_answer = 0;
let selected_answer = 0;

function questionGenerate() {
    let number1 = Math.floor(Math.random() * 50 + 1);
    let number2 = Math.floor(Math.random() * 50 + 1);
    operand1.innerHTML = number1;
    operand2.innerHTML = number2;
    let operator_index = Math.floor(Math.random() * 4);
    operator.innerHTML = operators[operator_index];

    if (operator_index == 0) {
        original_answer = number1 + number2;
        console.log(original_answer);
    } else if (operator_index == 1) {
        original_answer = number1 * number2;
        console.log(original_answer);
    } else if (operator_index == 2) {
        original_answer = number1 - number2;
        console.log(original_answer);
    } else if (operator_index == 3) {
        original_answer = number1 % number2;
        console.log(original_answer);
    }

    let answer_index = Math.floor(Math.random() * 4);
    for (let i = 0; i < options.length; i++) {
        if (i == answer_index) {
            options[i].innerHTML = original_answer;
        } else {
            options[i].innerHTML = original_answer + random_numbers[i];
        }

        options[i].addEventListener("click", () => {
            selected_answer = options[i].innerHTML;
            options[i].style.backgroundColor='white';
            options[i].style.color='black';
            checkAnswer();
        });
    }
}
let expectedAnswer=0;
function checkAnswer() {
    expectedAnswer = eval(operand1.innerHTML + operator.innerHTML + operand2.innerHTML);
    if (parseInt(selected_answer) === expectedAnswer) {
        return true;
    } else {
       return false;
    }
}

result_button.addEventListener("click", () => {
    if(checkAnswer()){
        h2.innerHTML="Correct";
        h2.style.color='green';
    }
    else{
        h2.innerHTML="Wrong";
        h2.style.color='red';
    }
    for(let i=0;i<options.length;i++){
        if(parseInt(options[i].innerHTML)==expectedAnswer){
            options[i].style.backgroundColor='green';
        }
        else{
            options[i].style.backgroundColor='red';
        }
    }
});

