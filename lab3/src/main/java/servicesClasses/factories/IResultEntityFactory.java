package servicesClasses.factories;

import models.entities.Point;
import servicesClasses.validators.exceptions.ValidationException;

public interface IResultEntityFactory {
    Point createNewPoint(String owner, String x, String y, String r) throws ValidationException;
}
