
function reversal(string) {
    console.log("reversal function string", string)

    var reversed = []

    for(var i = 0; i < string.length; i++){
        reversed.push(string.split('')[(string.length -1) - i])
    }

    document.querySelector('.reversal').innerText = reversed.join('')
}


/*
Implement the logic in the alphabits function that return the characters in
alphabetical order, and outputs the result in the DOM, below the text input.
*/
function alphabits(string) {
    console.log("alphabits function string", string)

    var alphabits = []

    // the lowest number from char code will be the first in the string
    var lowest;

    //
    for(var i = 0; i < string.length; i++) {

    }


}


/*
Implement the logic in the palindrome function that determine whether the
string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
*/
function palindrome(string) {
    console.log("palindrome function string", string)

}


var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);


function main(string){
    console.log("main function called")

    // clear the console and call the functions
    console.clear()

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
        testString = document.querySelector('input[name="stringHere"]').value

        // Check if input contains only letters and run all functions if true
        if(checkInputAllAlpha(testString)){
            main(testString)
        } else {
            alert("Input value contains non-alphanumeric characters.  The input only accepts alphabetical characters")
        }
    })


    document.querySelector('input[name="stringHere"]').addEventListener('keypress', function(event){

        if(event.keyCode === '13'){

            // Get input value
            testString = document.querySelector('input[name="stringHere"]').value

            // Check if input contains only letters and run all functions if true
            if(checkInputAllAlpha(testString)){
                main(testString)
            } else {
                alert("Input value contains non-alphanumeric characters.  The input only accepts alphabetical characters")
            }
        }
    })
}

applyEventListeners();
