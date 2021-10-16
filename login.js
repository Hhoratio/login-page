let loginClick = document.querySelector('#login-span');
let count = 0;
loginClick.addEventListener('click', () => {
    loginClick.style.backgroundColor = count % 2 == 0 ? '#128df1': '';
    count++;
})
