export class Registration {
    static loginField(login: string): string {
        if (login.length >= 4 && login.length <= 20) {
            return login;
        } else {
            return `Логин должен содержать от 4 до 20 символов`;
        }
    }
    static passwordField(password: string): string {
        if (password.length >= 6 && password.length <= 12) {
            return password;
        } else {
            return `Пароль должен содержать от 6 до 12 символов`;
        }
    }

    static mailField(email: string): string {
        if (email.includes('@')) {
            return email;
        } else {
            return `Пропущен символ @`;
        }
    }
}
