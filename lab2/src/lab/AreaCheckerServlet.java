package lab;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AreaCheckerServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        HttpSession session = req.getSession();
        if (req.getParameter("key").equals("reset")) {
            session.invalidate();
        } else {
            resp.setContentType("text/html;charset=UTF-8");
            List<Point> hitHistory = (List<Point>) session.getAttribute("hitHistory");
            if (hitHistory == null) {
                hitHistory = new ArrayList<Point>();
                session.setAttribute("hitHistory", hitHistory);
            }
            try {
                double x = Double.parseDouble(req.getParameter("x"));
                double y = Double.parseDouble(req.getParameter("y"));
                double r = Double.parseDouble(req.getParameter("r"));
                if (checkData(x, y, r)) {
                    Point newPoint = new Point(x, y, r);
                    hitHistory.add(newPoint);
                    session.setAttribute("newPoint", newPoint);
                    req.getRequestDispatcher("/result.jsp").forward(req, resp);
                } else {
                    resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
                }
            } catch (Exception e) {
                resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
            }
        }
    }

    private boolean checkData(double x, double y, double r) {
        Double[] rInterval = {1.0, 2.0, 3.0, 4.0, 5.0};
        return (Arrays.asList(rInterval).contains(r)) && y >= -3 && y <= 3 && x >= -3 && x <= 5;
    }

    @Override
    public String getServletInfo() {
        return "AreaCheckServlet - осуществляет проверку попадания точки в область на координатной плоскости и " +
                "формирует HTML-страницу с результатами проверки. Должен обрабатывать все запросы, " +
                "содержащие сведения о координатах точки и радиусе области.";
    }
}