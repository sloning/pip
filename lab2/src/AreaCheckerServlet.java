import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
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
            List<String> tableRows = (List<String>) session.getAttribute("tableRows");
            if (tableRows == null) {
                tableRows = new ArrayList<>();
                session.setAttribute("tableRows", tableRows);
            }
            double x = Double.parseDouble(req.getParameter("x"));
            double y = Double.parseDouble(req.getParameter("y"));
            double r = Double.parseDouble(req.getParameter("r"));
            try (PrintWriter writer = resp.getWriter()) {
                if (checkData(x, y, r)) {
                    tableRows.add(new Point(x, y, r).toString());
                    for (String tableRow : tableRows) writer.println(tableRow);
                } else resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
            }
        }
    }

    private boolean checkData(double x, double y, double r) {
        Double[] rInterval = {1.0, 1.5, 2.0, 2.5, 3.0};
        return (Arrays.asList(rInterval).contains(r)) && y >= -3 && y <= 5 && x >= -4 && x <= 4;
    }

    @Override
    public String getServletInfo() {
        return "AreaCheckServlet - осуществляет проверку попадания точки в область на координатной плоскости и " +
                "формирует HTML-страницу с результатами проверки. Должен обрабатывать все запросы, " +
                "содержащие сведения о координатах точки и радиусе области.";
    }
}