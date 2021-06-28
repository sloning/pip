package services.validators;

import services.validators.exceptions.ValidationException;

import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;

public class PointValidator implements IPointValidator {
    private static final List<Double> rValues = Arrays.asList(1.0, 1.5, 2.0, 2.5, 3.0);
    private final Logger log = Logger.getLogger(String.valueOf(PointValidator.class));

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

        if (x < -3 || x > 5) {
            log.info("Got wrong x value");
            throw new ValidationException();
        }
    }

    private void validateY(Double y) throws ValidationException {
        if (y == null) {
            log.info("Got null y value");
            throw new ValidationException();
        }

        if (y < -5 || y > 3) {
            log.info("Got wrong y value");
            throw new ValidationException();
        }
    }

    private void validateR(Double r) throws ValidationException {
        if (r == null) {
            log.info("Got null r value");
            throw new ValidationException();
        }

        if (!rValues.contains(r)) {
            log.info("Got wrong r value");
            throw new ValidationException();
        }
    }
}
