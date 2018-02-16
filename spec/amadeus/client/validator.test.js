import Validator from '../../../src/amadeus/client/validator';

const validator = new Validator();

describe('Validator', () => {
  it('should exports the functions', () => {
    expect(validator).not.toBe(null);
  });

  describe('.initRequired', () => {
    it('should return the expected values', () => {
      let options = {
        'test1' : '1'
      };
      process.env.AMADEUS_TEST2 = '2';
      expect(validator.initRequired('test1', options)).toBe('1');
      expect(validator.initRequired('test2', options)).toBe('2');
      process.env.AMADEUS_TEST2 = undefined;
    });

    it('should throw error if key not found', () => {
      expect(() => {
        validator.initRequired('test3', {});
      }).toThrowError();
    });
  });

  describe('.initOptional', () => {
    it('should return the expected values', () => {
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
    it('should return null if all keys are recognised', () => {
      let options = { 'clientId' : '123' };
      let recognizedOptions = ['clientId'];
      let client = {
        'logger' : { 'log' : jest.fn() },
        'warn' : () => { return true; }
      };
      expect(validator.warnOnUnrecognizedOptions(options, client, recognizedOptions)).toBe(null);
      expect(client.logger.log).not.toHaveBeenCalled();
    });

    it('should log a warning if the key was not recognized', () => {
      let options = { 'clientId' : '123' };
      let recognizedOptions = [];
      let client = {
        'logger' : { 'log' : jest.fn() },
        'warn' : () => { return true; }
      };
      expect(validator.warnOnUnrecognizedOptions(options, client, recognizedOptions)).toBe(null);
      expect(client.logger.log).toHaveBeenCalledWith('Unrecognized option: clientId');
    });
  });
});
