/**
 * Helper class for validating parameters
 */
class Validator {
  /**
   * Uses {@link initOptional} to find an entry, and it that returns
   * `null` it raises an `ArgumentError`
   *
   * @param {string} key the key to find the entry
   * @param {Object} options the arguments that were passed to the {@link Amadeus} object
   * @throws {ArgumentError} when no entry can be found
   * @returns {Object} The object found by the key in the options.
   *
   */
  initRequired(key, options) {
    let result = this.initOptional(key, options);
    if (!result) throw new ArgumentError(`Missing required argument: ${key}`);
    return result;
  }

  /**
   * Tries to find an option by string or symbol in the options hash and
   * in the environment variables.When it can not find it anywhere it
   * defaults to the provided default option.
   *
   * @param {string} key the key to find the entry
   * @param {Object} options the arguments that were passed to the {@link Amadeus} object
   * @param {Object} fallback an optional default value to fall back on
   * @returns {Object} The object found by the key in the options, or the fallback value.
   */
  initOptional(key, options, fallback = null) {
    return options[key] ||
          options[key.to_s] ||
          process.env[`AMADEUS_${key.toUpperCase()}`] ||
          fallback;
  }

  /**
  * Checks a list of options for unrecognized keys and warns the user.
  * This is mainly used to provide a nice experience when users make a typo
  * in their arguments.
  #
  * @param {Object} options the arguments were passed to the {@see Amadeus}
  *  constructor
  * @param {Object} logger the logger used to send warnings to
  * @param {Array} recognizedOptions a whitelist of recognized options
  * @return {null}
  */
  warnOnUnrecognizedOptions(options, logger, recognizedOptions) {
    Object.keys(options).forEach((key) => {
      if (!recognizedOptions.includes(key)) {
        logger.warn('amadeus/client/validator.js', `Unrecognized option: ${key}`);
      }
    });
    return null;
  }
}

// PRIVATE

class ArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ArgumentError';
  }
}

export default Validator;
