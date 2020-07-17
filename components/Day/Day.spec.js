import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByDisplayValue,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import moment from "moment";

import Day from "./Day";

describe("Day", () => {
  it.todo("should render the day of the month");
  it("should render a disabled cell for days before the current date", () => {
    const dayObj = moment().clone().subtract(1, "days");
    render(<Day dayObj={dayObj}></Day>);

    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled");
  });
  it("should render a highlighted cell if day is in the selected date range", () => {
    const dayObj = moment().clone();
    const handleClick = jest.fn();
    render(<Day dayObj={dayObj} handleDayClick={handleClick}></Day>);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveStyle({ background: "#CB95AA" });
  });
  it.todo(
    "should not render a highlighted cell if day is after the selected date range"
  );
  it.todo(
    "should not render a highlighted cell if day is before the selected date range"
  );
  it.todo(
    "should X if day is in the selected date range and is before the current date"
  );
  it("should call f when it is clicked", () => {
    const dayObj = moment().clone();
    const handleClick = jest.fn();
    render(<Day dayObj={dayObj} handleDayClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalled();
  });
  it.todo("should call f when it is clicked and inside the date range");
  it.todo("should call f when it is clicked and after the date range");
  it.todo("should call f when it is clicked and before the date range");
});
