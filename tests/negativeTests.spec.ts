import { expect } from 'chai';
import { Registration } from '../registrationClass/registationPage';
import { V_NEGATIVE } from '../Helpers/valuesForForm';
import { VALUES_NEGATIVE, VALUES_POSITIVE } from '../Helpers/valuesForCheck';

describe('Negative test', () => {
    it('Check login', () => {
        expect(Registration.loginField(V_NEGATIVE.LOGIN_FIRST)).to.equal(VALUES_NEGATIVE.LOGIN_FIRST);
    });

    it('Check login2', () => {
        expect(Registration.loginField(V_NEGATIVE.LOGIN_SECOND)).to.equal(VALUES_POSITIVE.LOGIN_SECOND);
    });

    it('Check login3', () => {
        expect(Registration.loginField(V_NEGATIVE.LOGIN_THIRD)).to.equal(VALUES_POSITIVE.LOGIN_THIRD);
    });

    it('Check password', () => {
        expect(Registration.passwordField(V_NEGATIVE.PASSWORD_FIRST)).to.equal(VALUES_NEGATIVE.PASSWORD_FIRST);
    });

    it('Check password2', () => {
        expect(Registration.passwordField(V_NEGATIVE.PASSWORD_SECOND)).to.equal(VALUES_POSITIVE.PASSWORD_SECOND);
    });

    it('Check email', () => {
        expect(Registration.mailField(V_NEGATIVE.EMAIL_FIRST)).to.equal(VALUES_NEGATIVE.EMAIL_FIRST);
    });

    it('Check email2', () => {
        expect(Registration.mailField(V_NEGATIVE.EMAIL_SECOND)).to.equal(VALUES_POSITIVE.EMAIL_SECOND);
    });
});
