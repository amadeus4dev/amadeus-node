import https     from 'https';

const HOSTS = {
  'test'       : 'test.api.amadeus.com',
  'production' : 'production.api.amadeus.com'
};

const RECOGNIZED_OPTIONS = [
  'clientId',
  'clientSecret',
  'logger',
  'hostname',
  'customAppId',
  'customAppVersion',
  'http'
];

/**
 * Helper class for validating parameters
 */
class Validator {

  /**
   * Initialise the client's default value, ensuring the required values are
   * present
   *
   * @param  {Client} client the client object to set the defaults for
   * @param  {Object} options the associative array of options passed to the
   *  client on initialization
   */
  validateAndInitialize(client, options) {
    this.initializeClientCredentials(client, options);
    this.initializeLogger(client, options);
    this.initializeHost(client, options);
    this.initializeCustomApp(client, options);
    this.initializeHttp(client, options);

    this.warnOnUnrecognizedOptions(options, client, RECOGNIZED_OPTIONS);
  }

  // PRIVATE

  initializeClientCredentials(client, options) {
    client.clientId = this.initRequired('clientId', options);
    client.clientSecret = this.initRequired('clientSecret', options);
  }

  initializeLogger(client, options) {
    client.logger = this.initOptional('logger', options, console);
  }

  initializeHost(client, options) {
    let hostname = this.initOptional('hostname', options, 'test');
    client.host = this.initOptional('host', options, HOSTS[hostname]);
  }

  initializeCustomApp(client, options) {
    client.customAppId = this.initOptional('customAppId', options);
    client.customAppVersion = this.initOptional('customAppVersion', options);
  }

  initializeHttp(client, options) {
    client.http = this.initOptional('http', options, https);
  }

  initRequired(key, options) {
    let result = this.initOptional(key, options);
    if (!result) throw new ArgumentError(`Missing required argument: ${key}`);
    return result;
  }

  initOptional(key, options, fallback = null) {
    return options[key] ||
          options[key.to_s] ||
          process.env[`AMADEUS_${key.toUpperCase()}`] ||
          fallback;
  }

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
