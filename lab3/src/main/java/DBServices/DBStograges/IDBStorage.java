package DBServices.DBStograges;

import models.storages.IStorage;
import servicesClasses.factories.exceptions.DataParseException;
import servicesClasses.validators.exceptions.ValidationException;

import java.sql.SQLException;

public interface IDBStorage<Entity> {
    IStorage<Entity> getListFromDB(String owner) throws SQLException, DataParseException, ValidationException;

    void removeList(String owner) throws SQLException;

    void addNewEntityToDB(Entity entity) throws SQLException;
}
