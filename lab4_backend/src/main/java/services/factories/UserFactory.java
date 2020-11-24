package services.factories;

import models.entities.User;
import services.security.SecurityManager;
import services.validators.IUserValidator;
import services.validators.exceptions.ValidationException;

import javax.ejb.EJB;
import javax.ejb.Singleton;
import javax.inject.Inject;
import java.util.logging.Logger;

@Singleton
public class UserFactory implements IUserFactory {
    @EJB
    IUserValidator userValidator;
    @Inject
    private Logger log;

    @Override
    public User createNewUser(String login, String password) throws ValidationException {
        userValidator.validateCredentials(login, password);

        byte[] salt = SecurityManager.getSalt();
        byte[] hashedPassword = SecurityManager.hashPassword(password, salt);

        log.info("User successfully created");
        return new User(login, hashedPassword, salt);
    }
}
