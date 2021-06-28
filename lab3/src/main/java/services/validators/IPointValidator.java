package services.validators;

import services.validators.exceptions.ValidationException;

public interface IPointValidator {
    void validateValues(Double x, Double y, Double r) throws ValidationException;
}
