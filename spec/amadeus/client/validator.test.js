import Validator from '../../../src/amadeus/client/validator';

const validator = new Validator();

describe('Validator', () => {
  test('exports the functions', () => {
    expect(validator).not.toBe(null);
  });

  describe('.initRequired', () => {
    test('return the expected values', () => {
      let options = {
        'test1' : '1'
      };
      process.env.AMADEUS_TEST2 = '2';
      expect(validator.initRequired('test1', options)).toBe('1');
      expect(validator.initRequired('test2', options)).toBe('2');
      process.env.AMADEUS_TEST2 = undefined;
    });

    test('throw error if key not found', () => {
      expect(() => {
        validator.initRequired('test3', {});
      }).toThrowError();
    });
  });

  describe('.initOptional', () => {
    test('return the expected values', () => {
      let options = {
        'test1' : '1'
      };
      process.env.AMADEUS_TEST2 = '2';
      expect(validator.initOptional('test1', options)).toBe('1');
      expect(validator.initOptional('test2', options)).toBe('2');
      expect(validator.initOptional('test3', options)).toBe(null);
      expect(validator.initOptional('test4', options, '4')).toBe('4');
      process.env.AMADEUS_TEST2 = undefined;
    });
  });

  describe('.warnOnUnrecognizedOptions', () => {
    test('return null if all keys are recognised', () => {
      let options = { 'clientId' : '123' };
      let recognizedOptions = ['clientId'];
      let warn = jest.fn();
      let logger = { 'warn' : warn };
      expect(validator.warnOnUnrecognizedOptions(options, logger, recognizedOptions)).toBe(null);
      expect(warn).not.toHaveBeenCalled();
    });

    test('log a warning if the key was not recognized', () => {
      let options = { 'clientId' : '123' };
      let recognizedOptions = [];
      let warn = jest.fn();
      let logger = { 'warn' : warn };
      expect(validator.warnOnUnrecognizedOptions(options, logger, recognizedOptions)).toBe(null);
      expect(warn).toHaveBeenCalledWith('amadeus/client/validator.js', 'Unrecognized option: clientId');
    });
  });
});
