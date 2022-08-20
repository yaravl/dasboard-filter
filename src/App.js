import React from "react";
import { useDispatch } from "react-redux";
import { FilterPanel } from "./feature/filter/FilterPanel";

import { JobList } from "./feature/position/JobList";
import { TheHeader } from "./components/TheHeader";

import { addPositions } from "./feature/position/position-slice";
import data from "./mock/data.json";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(addPositions(data));
  });
  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
