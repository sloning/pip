package models.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "points")
public class Point implements Serializable {
    private double x, y, r;
    private boolean result;
    private User owner;
    private long id;

    public Point(double x, double y, double r, User owner, boolean result) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.owner = owner;
        this.result = result;
    }

    public Point() {
    }

    @Basic
    @Column(name = "x", nullable = false)
    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    @Basic
    @Column(name = "y", nullable = false)
    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    @Basic
    @Column(name = "r", nullable = false)
    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    @Basic
    @Column(name = "result", nullable = false)
    public int getResult() {
        return result ? 0 : 1;
    }

    public void setResult(int result) {
        this.result = result == 1;
    }

    @ManyToOne
    @JoinColumn(name = "owner", nullable = false)
    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "<tr><td>" + x + "</td><td>" + y + "</td><td>" + r + "</td><td>" + result + "</td></tr>";
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y, r, result, owner, id);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point)) return false;
        Point point = (Point) o;
        return Double.compare(point.x, x) == 0 &&
                Double.compare(point.y, y) == 0 &&
                Double.compare(point.r, r) == 0 &&
                result == point.result;
    }
}
