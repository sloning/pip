package DBServices.DBStograges;

import DBServices.DBWorker;
import models.entities.Point;
import models.storages.IStorage;
import models.storages.PointsStorage;
import servicesClasses.factories.ResultEntityFactory;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Logger;

public class DBStorage implements IDBStorage<Point> {
    private final Logger log = Logger.getLogger(String.valueOf(DBStorage.class));
    private final DBWorker dbWorker = new DBWorker();

    @Override
    public IStorage<Point> getListFromDB(String owner) throws SQLException {
        ResultEntityFactory resultEntityFactory = new ResultEntityFactory();
        IStorage<Point> newListFromDB = new PointsStorage();

        Statement statement = dbWorker.getConnection().createStatement();
        ResultSet resultSet = statement.executeQuery("select * from points where owner = '" + owner + "'");

        if (!resultSet.next()) {
            return new PointsStorage();
        } else {
            do {
                String x = resultSet.getString("x");
                String y = resultSet.getString("y");
                String r = resultSet.getString("r");

                Point newPointFromDB = null;
                try {
                    newPointFromDB = resultEntityFactory.createNewPoint(owner, x, y, r);
                } catch (Exception e) {
                    continue;
                }

                newListFromDB.addNewPoint(newPointFromDB);
            } while (resultSet.next());
        }
        resultSet.close();

        return newListFromDB;
    }

    @Override
    public void removeList(String owner) throws SQLException {
        Statement statement = dbWorker.getConnection().createStatement();
        statement.executeUpdate("delete from points where owner = '" + owner + "';");
        log.info("Points deleted from db");
    }

    @Override
    public void addNewEntityToDB(Point point) throws SQLException {
        Statement statement = dbWorker.getConnection().createStatement();
        statement.executeUpdate("insert into points(owner, x, y, r) " +
                "values ('" + point.getOwner() + "', '" + point.getX() + "', '" + point.getY() + "', '" +
                point.getR() + "');");
        log.info("Point was added to db");
    }
}
