const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => button.addEventListener('click', function () {
    buttons.forEach(button => reverseStyle(button));

    button.style.backgroundColor = 'aliceblue';
    button.style.color = 'black';
    button.style.transition = '300ms';
}))

function reverseStyle(button) {
    button.style.backgroundColor = 'transparent';
    button.style.color = 'aliceblue';
}