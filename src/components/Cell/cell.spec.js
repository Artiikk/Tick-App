import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/helpers';
import Cell from './index';

describe('Tests for Cell component', () => {
  describe('Check if component renders in a proper way', () => {
    let wrapper;
    beforeEach(() => {
      const props = { cell: 1 };
      wrapper = shallow(<Cell {...props} />);
    });

    it('Should render a cell', async () => {
      const cell = await findByTestAttr(wrapper, 'cell-component');
      expect(cell.length).toBe(1);
    });
  });
});