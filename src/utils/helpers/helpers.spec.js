import { getRandomCell, createArray, createMatrix, findByTestAttr } from './index';
import Cell from '../../components/Cell';
import { shallow } from 'enzyme';

describe('Tests for helpers functions', () => {
  
  describe('Tests for getRandomCell function', () => {
    it('Should be a number', () => {
      expect(typeof getRandomCell()).toBe('number');
    });
    it('Should be equal to 0 or 1', () => {
      expect(String(getRandomCell())).toMatch(/^0|1$/);
    });
  });

  describe('Tests for createArray function', () => {
    it('Should return an array', () => {
      expect(Array.isArray(createArray(100))).toBeTruthy();
    });
    it('Should return the right amount of elements', () => {
      expect(createArray(100).length).toBe(100);
    });
  });

  describe('Tests for createMatrix function', () => {
    it('Should return an array', () => {
      expect(Array.isArray(createMatrix(100))).toBeTruthy();
    });
    it('Should return other arrays inside', () => {
      const isEveryArray = createMatrix(100).every((item) => Array.isArray(item));
      expect(isEveryArray).toBeTruthy();
    });
    it('Should return other arrays with numbers only', () => {
      const isEveryNumber = createMatrix(100).every((arr) =>
        arr.every((item) => typeof item === 'number')
      );
      expect(isEveryNumber).toBeTruthy();
    });
    it('Should return the right elements inside', () => {
      expect(createMatrix(50, 50).every(arr => arr.every(item => item === 0 || 1))).toBeTruthy();
    });
    it('Should return the right amount of rows', () => {
      expect(createMatrix(100, 100).length).toBe(100);
    });
    it('Should return the right amount of cols', () => {
      expect(createMatrix(100, 100).every(item => item.length === 100)).toBeTruthy();
    });
  });

  describe('Tests for findByTestAttr function', () => {
    it('Should return a component', async () => {
      const cell = shallow(<Cell />);
      const component = await findByTestAttr(cell);
      
      expect(component).toBeTruthy();
    });
  });
})
