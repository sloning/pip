package points;

import models.entities.User;

import javax.ejb.EJB;
import javax.ejb.Singleton;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import java.io.IOException;
import java.util.logging.Logger;

@Singleton
@Path("/points")
public class PointsUpdater {
    @Inject
    private Logger log;
    @EJB
    private PointsDispenser pointsDispenser;

    public PointsUpdater() {
    }

    @Path("/getpoints")
    @POST
    public void getPoints(@Context HttpServletRequest req,
                          @Context HttpServletResponse resp) throws IOException {
        User user = (User) req.getSession().getAttribute("user");

        pointsDispenser.sendPoints(resp, user);
    }
}
