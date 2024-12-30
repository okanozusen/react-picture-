import { render } from '@testing-library/react';
import Card from '../Card';

test("renders Card without crashing", () => {
  render(<Card caption="Sample Caption" src="test.jpg" />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Card caption="Sample Caption" src="test.jpg" />);
  expect(asFragment()).toMatchSnapshot();
});
