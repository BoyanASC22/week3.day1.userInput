let title = document.getElementById("title_input")
let noun = document.getElementById("noun")
let verb = document.getElementById("verb")
let adjective = document.getElementById("adjective")
let button = document.querySelector("button")

let finaloutput = document.getElementById("story_result")
let main_output = document.getElementById("main_title")
let form_container = document.querySelector("form")



function final_output (event) {
    if (title.value == "" || noun.value == "" || verb.value == "" || adjective.value == "") {
        alert("Please fill in all fields")
    }
    else {
        console.log("Click registered")
        main_output.innerHTML = title.value;
        finaloutput.innerHTML = "Last night I ate a " + noun.value + ", and today I just had to " + verb.value + ". What a " + adjective.value + " day!";
        event.preventDefault();
        document.getElementsByClassName("form_container")
        form_container.style.display = "none";
    }
}
 
button.onclick = final_output;

