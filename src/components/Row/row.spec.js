import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/helpers';
import Row from './index';

describe('Tests for Row component', () => {
  describe('Check if component renders in a proper way', () => {
    let wrapper;
    beforeEach(() => {
      const props = { row: [0, 1, 1] };
      wrapper = shallow(<Row {...props} />);
    });

    it('Should render a row', async () => {
      const row = await findByTestAttr(wrapper, 'row-component');
      expect(row.length).toBe(1);
    });
  });
});