import { expect } from 'chai';
import { Registration } from '../registrationClass/registationPage';
import { V_Positive, Val_Negative } from '../Helpers/valuesForForm';
import { Values_Negative, Values_Positive } from '../Helpers/valuesForCheck';

describe('Negative test', () => {
    it('Check login', () => {
        expect(Registration.loginField(Val_Negative.login)).to.equal(Values_Negative.loginFirst);
    });

    it('Check login2', () => {
        expect(Registration.loginField(Val_Negative.login2)).to.equal(Values_Positive.login_2);
    });

    it('Check login3', () => {
        expect(Registration.loginField(Val_Negative.login3)).to.equal(Values_Positive.login_3);
    });

    it('Check password', () => {
        expect(Registration.passwordField(Val_Negative.password)).to.equal(Values_Negative.passwordFirst);
    });

    it('Check password2', () => {
        expect(Registration.passwordField(Val_Negative.password2)).to.equal(Values_Positive.password_2);
    });

    it('Check email', () => {
        expect(Registration.mailField(Val_Negative.email)).to.equal(Values_Negative.emailFirst);
    });

    it('Check email2', () => {
        expect(Registration.mailField(Val_Negative.email2)).to.equal(Values_Positive.email_2);
    });
});
