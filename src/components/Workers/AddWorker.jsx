import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState("");

  const miniWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredWorkerName?.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir isim giriniz.",
      });
      return;
    }
    if (+enteredWage < miniWage) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: `Lütfen ${miniWage} değerinde büyük bir maaş değeri giriniz.`,
      });
      return;
    }
    setEnteredWorkerName("");
    setEnteredWage("");
    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    console.log("enteredWage=>", enteredWage);
    console.log("enteredWorkerName=>", enteredWorkerName);
    console.log("props.workers", props.workers);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label className="font-medium">Çalışan İsmi</label>
          <input
            type="text"
            placeholder="Çalışan ismi giriniz"
            id="name"
            className="max-w-[40rem] w-full mx-auto border p-2"
            onChange={(e) => setEnteredWorkerName(e.target.value)}
            value={enteredWorkerName}
          />
          <label className="font-medium">Maaş Miktarı</label>
          <input
            type="text"
            placeholder="Maaş miktarı giriniz"
            id="wage"
            className="max-w-[40rem] w-full mx-auto border p-2"
            onChange={(e) => setEnteredWage(e.target.value)}
            value={enteredWage}
          />
          <Button className="mt-5 bg-blue-500" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddWorker;
