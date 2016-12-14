function reversal(string) {

}

function alphabits(string) {

}

function palindrome(string) {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);


function main(string){
    console.log("main function called")

    reversal(string)
    alphabits(string)
    palindrome(string)
}


function checkInputAllAlpha (string) {

    var regexExp = /[A-Za-z]/g

    if (string.replace(regexExp, '') === "") {
        console.log("All Alpha")
        return true;
    }
}


function applyEventListeners() {

    document.querySelector('.what').addEventListener('click', function(event) {
        event.preventDefault()
        console.log("button clicked")

        // Get input value
        var inputString = document.querySelector('input[name="stringHere"]').value

        // Check if input contains only letters and run all functions if true
        if(checkInputAllAlpha(inputString)){
            main(inputString)
        } else {
            alert("Input value contains non-alphanumeric characters.  The input only accepts alphabetical characters")
        }
    })
}

applyEventListeners();
