import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import moment from "moment";

import Day from "./Day";

describe("Day", () => {
  it("should render the day of the month", () => {
    const day = moment();
    const dayOfMonth = day.format("D");
    render(<Day dayObj={day}></Day>);

    expect(screen.getByText(dayOfMonth)).toBeInTheDocument;
  });
  it("should render a disabled cell for days before the current date", () => {
    const dayObj = moment().clone().subtract(1, "days");
    render(<Day dayObj={dayObj}></Day>);

    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled");
  });
  it("should render a highlighted cell if day is in the selected date range", () => {
    const day = moment().add(3, "days");
    const selectedStartDate = day.clone().subtract(1, "days");
    const selectedEndDate = day.clone().add(1, "days");
    render(
      <Day
        dayObj={day}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
      ></Day>
    );
    expect(screen.getByTestId("highlighted")).toBeInTheDocument();
  });
  it("should not render a highlighted cell if day is after the selected date range", () => {
    const day = moment().add(5, "days");
    const selectedStartDate = moment().subtract(1, "days");
    const selectedEndDate = moment().add(1, "days");
    render(
      <Day
        dayObj={day}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
      ></Day>
    );
    expect(screen.queryByTestId("highlighted")).not.toBeInTheDocument();
  });
  it("should not render a highlighted cell if day is before the selected date range", () => {
    const day = moment();
    const selectedStartDate = moment().add(1, "days");
    const selectedEndDate = moment().add(3, "days");
    render(
      <Day
        dayObj={day}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
      ></Day>
    );
    expect(screen.queryByTestId("highlighted")).not.toBeInTheDocument();
  });
  it("should call handleClick when it is clicked", () => {
    const dayObj = moment().add(1, "days");
    const handleClick = jest.fn();
    render(<Day dayObj={dayObj} handleDayClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalled();
  });
});
