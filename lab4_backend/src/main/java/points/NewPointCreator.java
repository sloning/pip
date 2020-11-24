package points;

import DAO.IPointsDAO;
import com.google.gson.Gson;
import models.entities.Point;
import models.entities.User;
import services.factories.IResultEntityFactory;
import services.validators.exceptions.ValidationException;

import javax.ejb.EJB;
import javax.ejb.Singleton;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.io.PrintWriter;

@Singleton
@Path("/points")
public class NewPointCreator {
    @EJB
    private IPointsDAO<Point> pointsDAO;
    @EJB
    private IResultEntityFactory resultEntityFactory;

    public NewPointCreator() {
    }

    @Path("/newpoint")
    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void addNewPoint(@FormParam("x") double x,
                            @FormParam("y") double y,
                            @FormParam("r") double r,
                            @Context HttpServletRequest req,
                            @Context HttpServletResponse resp) throws IOException, ValidationException {
        User owner = (User) req.getSession().getAttribute("user");
        Point newPoint = resultEntityFactory.createNewPoint(owner, x, y, r);
        pointsDAO.addNewEntityToDB(newPoint);

        String jsonPoint = translatePointToJson(newPoint);
        sendPoint(resp, jsonPoint);
    }

    private String translatePointToJson(Point point) {
        Point newPoint = new Point(point.getX(), point.getY(), point.getR(), null, point.getResult() == 0);
        return new Gson().toJson(newPoint);
    }

    private void sendPoint(HttpServletResponse resp, String point) throws IOException {
        PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(point);
        out.flush();
    }
}
