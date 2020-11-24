package DAO;

import models.entities.User;
import services.security.SecurityManager;

import javax.ejb.Stateful;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.io.Serializable;
import java.util.logging.Logger;

@Stateful
public class UserDAO implements IUserDAO<User>, Serializable {
    //    @PersistenceContext(unitName = "JPAUNIT")
    private final EntityManagerFactory factory = Persistence.createEntityManagerFactory("JPAUNIT");
    private final EntityManager entityManager = factory.createEntityManager();
    @Inject
    private Logger log;

    public UserDAO() {
    }

    @Override
    public User getUserFromDB(String login) {
        try {
            return entityManager.createQuery("from User where login = :login", User.class).setParameter("login", login).getSingleResult();
        } catch (Exception e) {
            log.info(e.toString());
            return null;
        }
    }

    @Override
    public void addNewUserToDB(User user) {
        entityManager.getTransaction().begin();
        entityManager.persist(user);
        entityManager.flush();
        entityManager.refresh(user);
        entityManager.getTransaction().commit();
        log.info("User was added to db");
    }

    public boolean validate(String login, String password) {
        User user = getUserFromDB(login);
        if (user != null) {
            return SecurityManager.isExpectedPassword(password, user.getSalt(), user.getPassword());
        }
        return false;
    }
}
