import Card from "../UI/Card";

const WorkerList = (props) => {
  const { workers, setWorkers } = props;

  if (workers?.length < 1) {
    return;
  }

  const deleteWorker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };
  // console.log("props.workers222", props.workers);
  return (
    <div>
      <Card className="mt-10">
        <ul>
          <li className="flex justify-between p-2">
            <span className="font-bold">İsim</span>
            <span className="font-bold">Maaş</span>
          </li>
          {workers?.map((worker) => (
            <li
              key={worker.id}
              className="flex justify-between cursor-pointer hover:shadow-xl p-2"
              onClick={() => deleteWorker(worker.id)}
            >
              <span>{worker.name}</span>
              <span className="text-teal-700 font-medium">{worker.wage} ₺</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default WorkerList;
