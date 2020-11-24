package services.factories;

import models.entities.Point;
import models.entities.User;
import services.validators.exceptions.ValidationException;

public interface IResultEntityFactory {
    Point createNewPoint(User owner, double x, double y, double r) throws ValidationException;
}
