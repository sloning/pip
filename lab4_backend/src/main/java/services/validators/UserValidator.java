package services.validators;

import services.validators.exceptions.ValidationException;

import javax.ejb.Stateless;

@Stateless
public class UserValidator implements IUserValidator {
    @Override
    public void validateCredentials(String login, String password) throws ValidationException {
        validateLogin(login);
        validatePassword(password);
    }

    private void validateLogin(String login) throws ValidationException {
        if (login.length() < 4 || login.length() > 20) throw new ValidationException();
    }

    private void validatePassword(String password) throws ValidationException {
        if (password.length() < 8 || password.length() > 20) throw new ValidationException();
    }
}
