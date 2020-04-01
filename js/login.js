var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        Console.log('from login() usernameInput', usernameInput);
        var passwordInput = document.getElementById('password');
        var username = usernameInput.value;
        var password = passwordInput.value;
        Console.log('username', username);
        Console.log('password', password);
        if (username === 'simbrar' && password === '1234') {
            this.goToHome();
        }
        else {
            this.dispayError();
        }
    };
    Login.prototype.dispayError = function () {
        var errorBox = document.getElementById('error-box');
        errorBox.innerHTML = 'User not found';
        Console.log('errorBox.innerHTML', errorBox.innerHTML);
        errorBox.style = "display: block;";
        var interval = setInterval(function () {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    };
    Login.prototype.goToHome = function () {
        window.location.href = 'index.html';
    };
    return Login;
}());
var login = new Login();
