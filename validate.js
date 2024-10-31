const submitBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');
const outputBox = document.querySelector('#results-div');
const inputNo = document.querySelector('#user-input');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!inputNo.value) {
        alert('Please provide a phone number');
        return;
    }
    validateInput(inputNo.value);
})

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    inputNo.value = '';
    outputBox.innerHTML = '';
})

function validateInput(input) {
    const regex = /^(?:1|1\s)?(?:\(\d{3}\)|\d{3})(?:\s|-)?\d{3}(?:\s|-)?\d{4}$/;
    let pattern = input.match(regex);
    outputBox.innerHTML += pattern? `<p>Valid US number: ${pattern}</p>` : `<p>Invalid US number: ${input}</p>`;
    inputNo.value = '';
}