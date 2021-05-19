import renderer from 'react-test-renderer';

import InfoPage from '../../pages/info';

describe('Info page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<InfoPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
