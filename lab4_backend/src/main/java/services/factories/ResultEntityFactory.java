package services.factories;

import models.entities.Point;
import models.entities.User;
import services.checkers.IPointChecker;
import services.validators.IPointValidator;
import services.validators.exceptions.ValidationException;

import javax.ejb.EJB;
import javax.ejb.Singleton;
import javax.inject.Inject;
import java.util.logging.Logger;

@Singleton
public class ResultEntityFactory implements IResultEntityFactory {
    @Inject
    private Logger log;
    @EJB
    private IPointValidator pointValidator;
    @EJB
    private IPointChecker pointChecker;

    @Override
    public Point createNewPoint(User owner, double x, double y, double r) throws ValidationException {
        pointValidator.validateValues(x, y, r);

        boolean result = pointChecker.checkResult(x, y, r);

        log.info("New Point was successfully created");
        return new Point(x, y, r, owner, result);
    }
}
