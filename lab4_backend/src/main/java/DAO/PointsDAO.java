package DAO;

import models.entities.Point;
import models.entities.User;

import javax.ejb.Stateful;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.List;
import java.util.logging.Logger;

@Stateful
public class PointsDAO implements IPointsDAO<Point> {
    private final EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("JPAUNIT");
    private final EntityManager entityManager = entityManagerFactory.createEntityManager();
    @Inject
    private Logger log;

    public PointsDAO() {
    }

    @Override
    public List<Point> getListFromDB(User owner) {
        try {
            return entityManager.createQuery("from Point where owner = :owner", Point.class).setParameter("owner", owner).getResultList();
        } catch (Exception e) {
            log.info(e.toString());
            return null;
        }
    }

    @Override
    public void removeList(User owner) {
        for (Point point : getListFromDB(owner)) {
            entityManager.getTransaction().begin();
            entityManager.remove(point);
            entityManager.getTransaction().commit();
        }
        log.info(owner + " points were deleted from db");
    }

    @Override
    public void addNewEntityToDB(Point point) {
        entityManager.getTransaction().begin();
        entityManager.persist(point);
        entityManager.getTransaction().commit();
        log.info("Point was added to db");
    }
}
