
class Login {


    constructor() {

    }

    login() {
        const usernameInput = document.getElementById('username');
        console.log('from login() usernameInput', usernameInput);

        const passwordInput = document.getElementById('password');

        let username = usernameInput.value;
        let password = passwordInput.value;
        console.log('username', username); 
        console.log('password', password);
        

        if (username === 'simbrar' && password === '1234') {
            this.goToHome();
        } else {
            this.dispayError();
        }
    }

    dispayError() {
        const errorBox = document.getElementById('error-box');
        errorBox.innerHTML = 'User not found!';
        console.log('errorBox.innerHTML',
            errorBox.innerHTML
        );
        errorBox.style = "display: block;";
        const interval = setInterval(() => {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    }

    goToHome () {
        window.location.href = 'index.html'
    }
}

const login = new Login();