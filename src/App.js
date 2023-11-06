import React, { useEffect, useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    // console.log("çalıştı");
    localStorage.setItem("workers", JSON.stringify(workers));
  }, [workers]);

  useEffect(() => {
    // console.log("first");
  }, []);

  // console.log("workers appp", workers);
  return (
    <React.Fragment>
      <h1 className="text-white text-center mt-5 text-3xl">Maaş otomasyon</h1>
      <AddWorker setWorkers={setWorkers} workers={workers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </React.Fragment>
  );
}

export default App;
