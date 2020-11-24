package points;

import DAO.IPointsDAO;
import com.google.gson.Gson;
import models.entities.Point;
import models.entities.User;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Stateless
public class PointsDispenser {
    @EJB
    private IPointsDAO<Point> pointsDAO;

    public PointsDispenser() {
    }

    public void sendPoints(HttpServletResponse resp, User owner) throws IOException {
        List<Point> listOfPoints = pointsDAO.getListFromDB(owner);

        String points = "{ \"points\": [] }";
        if (listOfPoints != null && !listOfPoints.isEmpty()) {
            points = translatePointsToJson(listOfPoints);
        }

        send(resp, points);
    }

    private String translatePointsToJson(List<Point> list) {
        StringBuilder listJsonString = new StringBuilder();
        listJsonString.append("{ \"points\": [");

        for (Point point : list) {
            Point newPoint = new Point(point.getX(), point.getY(), point.getR(), null, point.getResult() == 0);
            String pointJson = new Gson().toJson(newPoint);
            listJsonString.append(pointJson);
            listJsonString.append(",");
        }
        listJsonString.deleteCharAt(listJsonString.length() - 1);
        listJsonString.append("]}");

        return listJsonString.toString();
    }

    private void send(HttpServletResponse resp, String points) throws IOException {
        PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(points);
        out.flush();
    }
}
