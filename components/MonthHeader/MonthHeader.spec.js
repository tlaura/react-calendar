import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import moment from "moment";

import MonthHeader from "./MonthHeader";

describe("MonthHeader", () => {
  it("should call previous month when clicked", () => {
    const month = moment("2020-03", "YYYY-MM");
    const prevClick = jest.fn();
    render(
      <MonthHeader
        month={month}
        toDateCalendar={true}
        handlePrevMonthClick={prevClick}
      ></MonthHeader>
    );

    fireEvent.click(screen.getByTestId("prevButton"));

    expect(prevClick).toHaveBeenCalled();
  });
  it("should call next month when clicked", () => {
    const month = moment("2020-03", "YYYY-MM");
    const nextClick = jest.fn();
    render(
      <MonthHeader
        month={month}
        toDateCalendar={true}
        handlePrevMonthClick={nextClick}
      ></MonthHeader>
    );

    fireEvent.click(screen.getByTestId("nextButton"));

    expect(nextClick).toHaveBeenCalled();
  });
});
