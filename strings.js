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


function applyEventListeners() {

    document.querySelector('.what').addEventListener('click', function(event) {
        event.preventDefault()
        console.log("What button clicked")
    })
}

applyEventListeners();
