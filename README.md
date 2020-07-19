# react-calendar

A simple calendar that lets you pick a range of dates in the current year by clicking on start and end dates.

## How to run

``` 
npm install
```

``` 
npm run dev
```

## Testing

**Day** component is responsible for most of the logic regarding selection so it contains most testing.  

I've also tested the **MonthHeader** component to get correct month. 

I didn't test Calendar component because most testable feautures are passed down to Day component, and I didnt test DaysHeader component because it is a display component, responsible for no logic. 

## Next steps/Roadmap

- Test **CalendarApp** logic
- Update design using **Material-UI**
