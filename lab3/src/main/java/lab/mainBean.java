package lab;

import DBServices.DBStograges.DBStorage;
import models.entities.Point;
import servicesClasses.factories.ResultEntityFactory;

import javax.faces.context.FacesContext;
import java.io.Serializable;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.logging.Logger;

public class mainBean implements Serializable {
    private final Logger log = Logger.getLogger(String.valueOf(mainBean.class));
    private final DBStorage dbStorage = new DBStorage();

    public mainBean() {
    }

    public void addNewPoint() throws SQLException {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        Map<String, String> params = facesContext.getExternalContext().getRequestParameterMap();
        ResultEntityFactory resultEntityFactory = new ResultEntityFactory();

        String x = params.get("X-value");
        String y = params.get("Y-value");
        String r = params.get("R-value");
        String owner = facesContext.getExternalContext().getSessionId(true);

        Point newPoint = null;
        try {
            newPoint = resultEntityFactory.createNewPoint(owner, x, y, r);
        } catch (Exception exception) {
            return;
        }

        dbStorage.addNewEntityToDB(newPoint);
    }

    public void removeList() throws SQLException {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        String owner = facesContext.getExternalContext().getSessionId(true);
        dbStorage.removeList(owner);
        log.info("Storage cleared");
    }

    public List<Point> getPoints() throws SQLException {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        String owner = facesContext.getExternalContext().getSessionId(true);
        return dbStorage.getListFromDB(owner).getList();
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof mainBean)) return false;
        return this == o;
    }

    @Override
    public int hashCode() {
        return Objects.hash(dbStorage);
    }

    @Override
    public String toString() {
        return "Controller Bean";
    }
}
