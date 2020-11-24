package points;

import DAO.IPointsDAO;
import models.entities.Point;
import models.entities.User;

import javax.ejb.EJB;
import javax.ejb.Singleton;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import java.util.logging.Logger;

@Singleton
@Path("/points")
public class PointsDropper {
    @Inject
    private Logger log;
    @EJB
    private IPointsDAO<Point> pointsDAO;

    public PointsDropper() {
    }

    @Path("/droppoints")
    @POST
    public void removeList(@Context HttpServletRequest req,
                           @Context HttpServletResponse resp) {
        User owner = (User) req.getSession().getAttribute("user");
        pointsDAO.removeList(owner);
        log.info("Storage cleared");
    }
}
