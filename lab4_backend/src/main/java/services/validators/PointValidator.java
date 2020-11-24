package services.validators;

import services.validators.exceptions.ValidationException;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.logging.Logger;

@Stateless
public class PointValidator implements IPointValidator {
    @Inject
    private Logger log;

    @Override
    public void validateValues(Double x, Double y, Double r) throws ValidationException {
        validateX(x);
        validateY(y);
        validateR(r);
    }

    private void validateX(Double x) throws ValidationException {
        if (x == null) {
            log.info("Got null x value");
            throw new ValidationException();
        }

        if (x < -5 || x > 5) {
            log.info("Got wrong x value");
            throw new ValidationException();
        }
    }

    private void validateY(Double y) throws ValidationException {
        if (y == null) {
            log.info("Got null y value");
            throw new ValidationException();
        }

        if (y < -5 || y > 5) {
            log.info("Got wrong y value");
            throw new ValidationException();
        }
    }

    private void validateR(Double r) throws ValidationException {
        if (r == null) {
            log.info("Got null r value");
            throw new ValidationException();
        }

        if (r < 1 || r > 5) {
            log.info("Got wrong r value");
            throw new ValidationException();
        }
    }
}
