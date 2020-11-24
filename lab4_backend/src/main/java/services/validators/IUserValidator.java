package services.validators;

import services.validators.exceptions.ValidationException;

import javax.ejb.Local;

@Local
public interface IUserValidator {
    void validateCredentials(String login, String password) throws ValidationException;
}
