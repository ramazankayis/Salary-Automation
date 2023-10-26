import React, { useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState([]);

  console.log("workers appp", workers);
  return (
    <React.Fragment>
      <h1 className="text-white text-center mt-5 text-3xl">Maaş otomasyon</h1>
      <AddWorker setWorkers={setWorkers} workers={workers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </React.Fragment>
  );
}

export default App;
