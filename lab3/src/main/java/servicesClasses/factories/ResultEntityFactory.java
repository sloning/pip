package servicesClasses.factories;

import models.entities.Point;
import servicesClasses.checkers.IPointChecker;
import servicesClasses.checkers.PointChecker;
import servicesClasses.validators.IPointValidator;
import servicesClasses.validators.PointValidator;
import servicesClasses.validators.exceptions.ValidationException;

import java.util.logging.Logger;

public class ResultEntityFactory implements IResultEntityFactory {
    private final Logger log = Logger.getLogger(String.valueOf(ResultEntityFactory.class));
    private final IPointValidator pointValidator = new PointValidator();
    private final IPointChecker pointChecker = new PointChecker();

    @Override
    public Point createNewPoint(String owner, String x, String y, String r) throws ValidationException {
        Double parsedX = round(Double.parseDouble(x));
        Double parsedY = round(Double.parseDouble(y));
        Double parsedR = round(Double.parseDouble(r));

        pointValidator.validateValues(parsedX, parsedY, parsedR);

        String popadaine = pointChecker.checkPopadanie(parsedX, parsedY, parsedR);

        log.info("New Point was successfully created");
        return new Point(parsedX, parsedY, parsedR, owner, popadaine);
    }

    private double round(double number) {
        number = (double) ((int) (number * 100)) / (100);
        return number;
    }
}
