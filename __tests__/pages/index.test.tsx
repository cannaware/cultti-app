import renderer from 'react-test-renderer';
import IndexPage from '../../pages/index';

describe('Index page', () => {
  it('should match the snapshot', () => {
    const launch = {
      flight_number: 110,
      details:
        "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
      launch_year: '2020',
    };
    const tree = renderer.create(<IndexPage launch={launch} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
