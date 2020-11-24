package services.checkers;

import javax.ejb.Stateless;

import static java.lang.Math.sqrt;

@Stateless
public class PointChecker implements IPointChecker {
    private Double x;
    private Double y;
    private Double r;

    @Override
    public boolean checkResult(Double x, Double y, Double r) {
        this.x = x;
        this.y = y;
        this.r = r;

        return checkCircle() || checkSquare() || checkTriangle();
    }

    private boolean checkSquare() {
        return x >= 0 && x <= r / 2 && y >= 0 && y <= r;
    }

    private boolean checkTriangle() {
        return x >= 0 && x <= r && y >= (x - r) && y <= 0;
    }

    private boolean checkCircle() {
        return sqrt(x * x + y * y) <= r && y <= 0 && x <= 0;
    }
}
