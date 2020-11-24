package users;

import DAO.IUserDAO;
import models.entities.User;
import points.PointsDispenser;
import services.security.SecurityManager;

import javax.ejb.EJB;
import javax.ejb.Singleton;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.util.logging.Logger;

@Singleton
@Path("/auth")
public class LoginHandler {
    @Inject
    private Logger log;
    @EJB
    private IUserDAO<User> userDAO;
    @EJB
    private PointsDispenser pointsDispenser;

    public LoginHandler() {
    }

    @Path("/signin")
    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void signin(@FormParam("login") String login,
                       @FormParam("password") String password,
                       @Context HttpServletRequest req,
                       @Context HttpServletResponse resp) throws IOException {
        User user = userDAO.getUserFromDB(login);

        if (user != null &&
                SecurityManager.isExpectedPassword(password, user.getSalt(), user.getPassword())) {
            log.info(user.getLogin() + " successfully logged in");
            HttpSession session = req.getSession();
            session.setAttribute("user", user);
            pointsDispenser.sendPoints(resp, user);
        } else {
            resp.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
            log.info("Unauthorized");
        }
    }
}
