package servicesClasses.checkers;

import static java.lang.Math.sqrt;

public class PointChecker implements IPointChecker {
    private Double x;
    private Double y;
    private Double r;

    @Override
    public String checkPopadanie(Double x, Double y, Double r) {
        this.x = x;
        this.y = y;
        this.r = r;

        if (checkCircle() || checkSquare() || checkTriangle()) {
            return "Попадание";
        }
        return "Промах";
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
}
