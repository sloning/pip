import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if (req.getParameter("key").equals("reset"))
            getServletContext().getNamedDispatcher("AreaChecker").forward(req, resp);
        if (req.getParameter("x") == null || req.getParameter("y") == null || req.getParameter("r") == null
        || req.getParameter("key") == null)
            req.getServletContext().getNamedDispatcher("Controller").forward(req, resp);
        else getServletContext().getNamedDispatcher("AreaChecker").forward(req, resp);
    }

    @Override
    public String getServletInfo() {
        return "ControllerServlet - определяет тип запроса, и, в зависимости от того, содержит ли запрос информацию " +
                "о координатах точки и радиусе, делегирует его обработку стартовой jsp-странице или AreaCheckServlet-у. " +
                "Все запросы внутри приложения должны передаваться этому сервлету, остальные сервлеты с веб-страниц " +
                "напрямую вызываться не должны.";
    }
}
