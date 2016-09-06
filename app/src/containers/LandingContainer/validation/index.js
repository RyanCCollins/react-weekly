import * as validation from 'utils/validator';
import memoize from 'lru-memoize';

const emailInput = [
  validation.isEmail,
  validation.valueRequired,
  validation.maxLength(50),
  validation.minLength(2),
];

const formValidation = validation.createValidator({
  emailInput,
});

const validator = memoize(10)(formValidation);
export default validator;
