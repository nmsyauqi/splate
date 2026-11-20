import {
    login
} from './auth.js';

export function initLogin() {
    const from = document.getElementById('login-form');
    const emailInput = document.getElementById('exampleInputEmail1');
    const passwordInput = document.getElementById('exampleInputPassword1');

    from.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        try {
            await login(email, password);
        } catch (err) {
            alert('Login gagal: ' + err.message)
        }
    });
}