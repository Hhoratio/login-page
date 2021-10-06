let loginClick = document.querySelector('#login-span');
let count = 0;
loginClick.addEventListener('click', () => {
    if( count % 2 === 0 ) {
        loginClick.style.backgroundColor = '#128df1';
        count++
    } else {
        loginClick.style.backgroundColor = '';
        count++
    }
})
