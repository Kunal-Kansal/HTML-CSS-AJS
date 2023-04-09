let btns = document.getElementsByTagName('h1')

for (let i = 0; i < btns.length - 2; i++) {
    btns[i].addEventListener('click', function (event) {

        let inputBox = document.getElementById('input-values');

        let inputContent = inputBox.value;

        inputContent += event.target.textContent;

        inputBox.value = inputContent
    })
}

function Answer() {
    let answerBox = document.getElementById('output-values');
    answerBox.value = eval(document.getElementById('input-values').value)
}

function Clear() {
    document.getElementById('input-values').value = ""
    document.getElementById('output-values').value = ''
}