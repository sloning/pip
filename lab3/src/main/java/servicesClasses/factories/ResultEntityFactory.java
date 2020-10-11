package servicesClasses.factories;

import models.entities.Point;
import servicesClasses.checkers.IPointChecker;
import servicesClasses.checkers.PointChecker;
import servicesClasses.factories.exceptions.DataParseException;
import servicesClasses.validators.IPointValidator;
import servicesClasses.validators.PointValidator;
import servicesClasses.validators.exceptions.ValidationException;

import java.util.logging.Logger;

public class ResultEntityFactory implements IResultEntityFactory {
    private final Logger log = Logger.getLogger(String.valueOf(ResultEntityFactory.class));
    private final IPointValidator pointValidator = new PointValidator();
    private final IPointChecker pointChecker = new PointChecker();

    @Override
    public Point createNewPoint(String owner, String x, String y, String r) throws DataParseException, ValidationException {
        Double parsedX;
        Double parsedY;
        Double parsedR;

        try {
            parsedX = Double.parseDouble(x);
            parsedY = Double.parseDouble(y);
            parsedR = Double.parseDouble(r);
        } catch (NumberFormatException exception) {
            log.info("Exception while parsing request data");
            throw new DataParseException();
        }

        try {
            pointValidator.validateValues(parsedX, parsedY, parsedR);
        } catch (ValidationException exception) {
            log.info("Exception while validating request data");
        }
        String popadaine = pointChecker.checkPopadanie(parsedX, parsedY, parsedR);


        log.info("New Point successfully created");
        return new Point(parsedX, parsedY, parsedR, owner, popadaine);
    }

    private double round(double number) {
        number = (double) ((int) (number * 100)) / (100);
        return number;
    }
}
