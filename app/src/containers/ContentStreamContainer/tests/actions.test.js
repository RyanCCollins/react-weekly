import expect from 'expect';
import {
  contentStreamDefaultAction,
} from '../actions';
import {
  CONTENTSTREAM_DEFAULT_ACTION,
} from '../constants';

describe('ContentStream actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: CONTENTSTREAM_DEFAULT_ACTION,
      };
      expect(contentStreamDefaultAction()).toEqual(expected);
    });
  });
});
