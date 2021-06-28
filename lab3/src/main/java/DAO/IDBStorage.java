package DAO;

import models.storages.IStorage;

import java.sql.SQLException;

public interface IDBStorage<Entity> {
    IStorage<Entity> getListFromDB(String owner) throws SQLException;

    void removeList(String owner) throws SQLException;

    void addNewEntityToDB(Entity entity) throws SQLException;
}
