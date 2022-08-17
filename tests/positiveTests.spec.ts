import { expect } from 'chai';
import { Registration } from '../registrationClass/registationPage';
import { afterEach, beforeEach } from 'mocha';
import { Values_Positive } from '../Helpers/valuesForCheck';
import { V_Positive } from '../Helpers/valuesForForm';

describe('Positive test', () => {
    it('Check login', () => {
        expect(Registration.loginField(V_Positive.login)).to.equal(Values_Positive.loginFirst);
    });

    it('Check login2', () => {
        expect(Registration.loginField(V_Positive.login2)).to.equal(Values_Positive.login_2);
    });

    it('Check login3', () => {
        expect(Registration.loginField(V_Positive.login3)).to.equal(Values_Positive.login_3);
    });

    it('Check password', () => {
        expect(Registration.passwordField(V_Positive.password)).to.equal(Values_Positive.passwordFirst);
    });

    it('Check password2', () => {
        expect(Registration.passwordField(V_Positive.password2)).to.equal(Values_Positive.password_2);
    });

    it('Check email', () => {
        expect(Registration.mailField(V_Positive.email)).to.equal(Values_Positive.emailFirst);
    });

    it('Check email2', () => {
        expect(Registration.mailField(V_Positive.email2)).to.equal(Values_Positive.email_2);
    });
});
