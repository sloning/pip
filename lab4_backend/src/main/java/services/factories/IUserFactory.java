package services.factories;

import models.entities.User;
import services.validators.exceptions.ValidationException;

public interface IUserFactory {
    User createNewUser(String login, String password) throws ValidationException;
}
