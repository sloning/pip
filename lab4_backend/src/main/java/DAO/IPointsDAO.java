package DAO;

import models.entities.User;

import java.util.List;

public interface IPointsDAO<Entity> {
    List<Entity> getListFromDB(User owner);

    void removeList(User owner);

    void addNewEntityToDB(Entity entity);
}
