package users;

import DAO.IUserDAO;
import models.entities.User;
import points.PointsDispenser;
import services.factories.IUserFactory;
import services.validators.exceptions.ValidationException;

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
public class RegistrationHandler {
    @Inject
    private Logger log;
    @EJB
    private IUserFactory userFactory;
    @EJB
    private IUserDAO<User> userDAO;
    @EJB
    private PointsDispenser pointsDispenser;

    public RegistrationHandler() {
    }

    @Path("/signup")
    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void signup(@FormParam("login") String login,
                       @FormParam("password") String password,
                       @Context HttpServletRequest req,
                       @Context HttpServletResponse resp) throws IOException {
        User user = getUser(login, password);

        if (user == null || userDAO.getUserFromDB(user.getLogin()) != null) {
            resp.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
            return;
        }

        userDAO.addNewUserToDB(user);

        HttpSession session = req.getSession();
        session.setAttribute("user", user);

        pointsDispenser.sendPoints(resp, user);
        log.info(user.getLogin() + " successfully signed up");
    }

    private User getUser(String login, String password) {
        User user;

        try {
            user = userFactory.createNewUser(login, password);
        } catch (ValidationException e) {
            log.info("Error while creating new user");
            return null;
        }

        return user;
    }
}
