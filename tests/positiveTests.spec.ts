import { expect } from 'chai';
import { Registration } from '../registrationClass/registationPage';
import { afterEach, beforeEach } from 'mocha';
import { VALUES_POSITIVE } from '../Helpers/valuesForCheck';
import { V_POSITIVE } from '../Helpers/valuesForForm';

describe('Positive test', () => {
    it('Check login', () => {
        expect(Registration.loginField(V_POSITIVE.LOGIN_FIRST)).to.equal(VALUES_POSITIVE.LOGIN_FIRST);
    });

    it('Check login2', () => {
        expect(Registration.loginField(V_POSITIVE.LOGIN_SECOND)).to.equal(VALUES_POSITIVE.LOGIN_SECOND);
    });

    it('Check login3', () => {
        expect(Registration.loginField(V_POSITIVE.LOGIN_THIRD)).to.equal(VALUES_POSITIVE.LOGIN_THIRD);
    });

    it('Check password', () => {
        expect(Registration.passwordField(V_POSITIVE.PASSWORD_FIRST)).to.equal(VALUES_POSITIVE.PASSWORD_FIRST);
    });

    it('Check password2', () => {
        expect(Registration.passwordField(V_POSITIVE.PASSWORD_SECOND)).to.equal(VALUES_POSITIVE.PASSWORD_SECOND);
    });

    it('Check email', () => {
        expect(Registration.mailField(V_POSITIVE.EMAIL_FIRST)).to.equal(VALUES_POSITIVE.EMAIL_FIRST);
    });

    it('Check email2', () => {
        expect(Registration.mailField(V_POSITIVE.EMAIL_SECOND)).to.equal(VALUES_POSITIVE.EMAIL_SECOND);
    });
});
