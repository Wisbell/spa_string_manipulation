function reversal() {

}

function alphabits() {

}

function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);



function checkInputAllAlpha () {

    var regexExp = /[A-Za-z]/g

    console.log("blank", document.querySelector('input[name="stringHere"]').value.replace(regexExp, ''))

    if (document.querySelector('input[name="stringHere"]').value.replace(regexExp, '') === "") {
        console.log("what")
    }
}


function applyEventListeners() {

    document.querySelector('.what').addEventListener('click', function(event) {
        event.preventDefault()
        console.log("What button clicked")

        // Check if input contains only letters
        checkInputAllAlpha()
    })
}

applyEventListeners();
