package models.storages;

import models.entities.Point;

import javax.ejb.Stateful;
import java.util.ArrayList;
import java.util.List;

@Stateful
public class PointsStorage implements IStorage<Point> {
    private final List<Point> pointsList;

    public PointsStorage() {
        pointsList = new ArrayList<>();
    }

    public void addNewPoint(Point point) {
        pointsList.add(point);
    }

    public List<Point> getList() {
        return pointsList;
    }

    public void clear() {
        pointsList.clear();
    }
}
