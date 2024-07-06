const form = document.getElementById("form");
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");


// check the user Input validity
const isValid = (input) => {
    if (input === '') {
        alert("Please provide a phone number");
        return;
    };
    // divide the number selected
    const countryC = '^(1\\s?)?';
    const areaC = '(\\([0-9]{3}\\)|[0-9]{3})';
    const phoneNum = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const spaces = '[\\s\\-]?';
    // creating a regEx object:
    const regex = new RegExp(
        `${countryC}${areaC}${spaces}${phoneNum}`
    );

    const p = document.createElement("p");
    p.className = "results-div";
    regex.test(input) ? p.style.color = "#E6E1C6" : p.style.color = "#C73E1D";
    p.appendChild(
        document.createTextNode(`${regex.test(input) ? 'Valid': 'Invalid' } US number: ${input}`)
    );
    result.appendChild(p);
    // p.appendChild(
    //     document.createTextNode(`${regex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`)
    // );
    // result.appendChild(p);
}

// event listeners
checkBtn.addEventListener("click", ()=>{
    isValid(userInput.value);
    userInput.value = "";
});

clearBtn.addEventListener("click", ()=>{
    result.textContent = "";
});

userInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        isValid(userInput.value);
        userInput.value = "";
    }
});

