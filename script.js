document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email').value;

    alert(`Thank you for subscribing! You will receive updates at ${emailInput}.`);

});