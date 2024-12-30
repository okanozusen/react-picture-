import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

test("renders Carousel without crashing", () => {
  render(<Carousel />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

test("left arrow moves to previous image", () => {
  const { getByTestId, queryByTestId } = render(<Carousel />);
  const rightArrow = getByTestId("right-arrow");
  const leftArrow = getByTestId("left-arrow");

  fireEvent.click(rightArrow);
  expect(queryByTestId("image-1")).toBeInTheDocument();

  fireEvent.click(leftArrow);
  expect(queryByTestId("image-0")).toBeInTheDocument();
});

test("left arrow is hidden on the first image, right arrow on the last", () => {
  const { getByTestId, queryByTestId } = render(<Carousel />);
  
  expect(queryByTestId("left-arrow")).toBeNull();

  const rightArrow = getByTestId("right-arrow");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);  


  expect(queryByTestId("right-arrow")).toBeNull();
});