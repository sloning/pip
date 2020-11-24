package users;

import javax.ejb.Singleton;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import java.util.logging.Logger;

@Singleton
@Path("/auth")
public class LogoutHandler {
    @Inject
    private Logger log;

    public LogoutHandler() {
    }

    @Path("/logout")
    @POST
    public void logout(@Context HttpServletRequest req,
                       @Context HttpServletResponse resp) {
        HttpSession session = req.getSession();
        session.invalidate();
        log.info("User logged out");
    }
}
