package services.factories;

import models.entities.Point;
import services.validators.exceptions.ValidationException;

public interface IResultEntityFactory {
    Point createNewPoint(String owner, String x, String y, String r) throws ValidationException;
}
