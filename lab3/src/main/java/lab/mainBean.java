package lab;

import javax.faces.context.FacesContext;
import java.io.Serializable;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class mainBean implements Serializable {
    private final DBWorker dbWorker = new DBWorker();
    private List<Point> points;

    public mainBean() {
    }

    public void addToList() throws SQLException {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        Map<String, String> params = facesContext.getExternalContext().getRequestParameterMap();
        System.out.println(facesContext.getExternalContext().getSessionId(true));
        System.out.println(Double.parseDouble(params.get("X-value")));
        System.out.println(Double.parseDouble(params.get("Y-value")));
        System.out.println(Double.parseDouble(params.get("R-value")));
        Point newPoint = new Point(facesContext.getExternalContext().getSessionId(true), Double.parseDouble(params.get("X-value")),
                Double.parseDouble(params.get("Y-value")), Double.parseDouble(params.get("R-value")));

        addNewPointToDB(newPoint);
        points = getListFromDB(newPoint.getOwner());
    }

    public void removeList() throws SQLException {
        System.out.println("CLEARED");
        FacesContext facesContext = FacesContext.getCurrentInstance();
        Statement statement = dbWorker.getConnection().createStatement();
        statement.executeUpdate("delete from points where owner = '" + facesContext.getExternalContext().getSessionId(true) + "';");
        points.clear();
    }

    private List<Point> getListFromDB(String owner) throws SQLException {
        List<Point> newListFromDB = new ArrayList<>();
        Statement statement = dbWorker.getConnection().createStatement();
        ResultSet resultSet = statement.executeQuery("select * from points where owner = '" + owner + "'");
        if (!resultSet.next()) {
            return new ArrayList<>();
        } else {
            do {
                double x = resultSet.getDouble("x");
                double y = resultSet.getDouble("y");
                double r = resultSet.getDouble("r");
                Point newPointFromDB = new Point(owner, x, y, r);
                newListFromDB.add(newPointFromDB);
            } while (resultSet.next());
        }
        resultSet.close();
        return newListFromDB;
    }

    private void addNewPointToDB(Point newPoint) throws SQLException {
        Statement statement = dbWorker.getConnection().createStatement();
        statement.executeUpdate("insert into points(owner, x, y, r) " +
                "values ('" + newPoint.getOwner() + "', '" + newPoint.getX() + "', '" + newPoint.getY() + "', '" +
                newPoint.getR() + "');");
    }

    public List<Point> getPoints() {
        return points;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof mainBean)) return false;
        mainBean that = (mainBean) o;
        return Objects.equals(points, that.points);
    }

    @Override
    public int hashCode() {
        return Objects.hash(points);
    }

    @Override
    public String toString() {
        return points.toString();
    }
}
