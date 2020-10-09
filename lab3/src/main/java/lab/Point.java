package lab;

import java.io.Serializable;
import java.util.Objects;

import static java.lang.Math.sqrt;

public class Point implements Serializable {
    private double x, y, r, svgX, svgY;
    private String popadanie = "";
    private String owner = "";

    public Point(String owner, double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.owner = owner;

        if (isValid()) popadanie = "Попадание";
        else popadanie = "Промах";

        svgX = x / r * 100 + 150;
        svgY = -(y / r * 100 - 150);
    }

    public Point() {
    }

    private boolean isValid() {
        return checkSquare() || checkTriangle() || checkCircle();
    }

    private boolean checkSquare() {
        return x <= 0 && x >= -r && y <= 0 && y >= -r;
    }

    private boolean checkTriangle() {
        return x <= 0 && x >= -r && y <= (r + x) / 2 && y >= 0;
    }

    private boolean checkCircle() {
        return sqrt(x * x + y * y) <= r / 2 && y <= 0 && x >= 0;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public double getSvgX() {
        return svgX;
    }

    public void setSvgX(double svgX) {
        this.svgX = svgX;
    }

    public double getSvgY() {
        return svgY;
    }

    public void setSvgY(double svgY) {
        this.svgY = svgY;
    }

    public String getPopadanie() {
        return popadanie;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    @Override
    public String toString() {
        return "<tr><td>" + x + "</td><td>" + y + "</td><td>" + r + "</td><td>" + popadanie + "</td></tr>";
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y, r, popadanie, owner);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point)) return false;
        Point point = (Point) o;
        return Double.compare(point.x, x) == 0 &&
                Double.compare(point.y, y) == 0 &&
                Double.compare(point.r, r) == 0 &&
                popadanie.equals(point.popadanie);
    }
}
