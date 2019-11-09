import {AbstractControl, ValidationErrors} from "@angular/forms";
import {startCase} from "lodash";

export const formErrors =
  (formControls: { [key: string]: AbstractControl }): { key: string, errors: ValidationErrors }[] =>
    Object.keys(formControls)
      .reduce((errors, key) => [ { key, errors: formControls[key].errors }, ...errors ], [])
      .filter(({ errors }) => errors !== null)
      .sort((x, y) => x.key.localeCompare(y.key))

export const formErrorMessages = (formControls: { [key: string]: AbstractControl }): string[] =>
  formErrors(formControls)
    .reduce(
      (errorMessages, { key, errors }) =>
        errorMessages.concat(Object.keys(errors).map(errorKey => errorMessageMapper(startCase(key), errorKey))), []
    )

const errorMessageMapper =
  (fieldName: string, errorKey: string): string => {
    switch (errorKey) {
      case "required":
        return `${fieldName} is required`

      case "email":
        return `${fieldName} must be a valid email`

      default:
        return `${fieldName} has an error of ${errorKey}`
    }
  }
