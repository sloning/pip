package lab;

import java.text.SimpleDateFormat;
import java.util.Date;

import static java.lang.Math.sqrt;

public class Point {
    private final double x;
    private final double y;
    private final double r;
    private final double svgX;
    private final double svgY;
    private String popadanie = "";

    public Point(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;

        if (isValid()) popadanie = "Попадание";
        else popadanie = "Промах";

        svgX = x / r * 100 + 150;
        svgY = -(y / r * 100 - 150);
    }

    private boolean isValid() {
        return checkSquare() || checkTriangle() || checkCircle();
    }

    private boolean checkSquare() {
        return x >= 0 && x <= r && y >= 0 && y <= r / 2;
    }

    private boolean checkTriangle() {
        return x >= 0 && x <= r && y >= (x - r) && y <= 0;
    }

    private boolean checkCircle() {
        return sqrt(x * x + y * y) <= r && y >= 0 && x <= 0;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public String getPopadanie() {
        return popadanie;
    }

    public double getSvgX() {
        return svgX;
    }

    public double getSvgY() {
        return svgY;
    }

    @Override
    public String toString() {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String formattedDate = formatter.format(new Date());

        return "<tr><td>" + x + "</td><td>" + y + "</td><td>" + (int) r + "</td><td>" + popadanie + "</td></tr>";
    }
}
