package models.entities;

import java.io.Serializable;
import java.util.Objects;

public class Point implements Serializable {
    private double x, y, r;
    private String popadanie = "";
    private String owner = "";

    public Point(double x, double y, double r, String owner, String popadanie) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.owner = owner;
        this.popadanie = popadanie;
    }

    public Point() {
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
