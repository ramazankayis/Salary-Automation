import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddWorker = (props) => {
  // const [enteredWorkerName, setEnteredWorkerName] = useState("");
  // const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState("");

  const nameInputRef = useRef();
  const wageInputRef = useRef();
  const miniWage = 5000;

  // useEffect(() => {
  //   console.log("çalıştı");
  // }, []);

  //  useEffect(() => {
  //    first

  //    return () => {
  //      second
  //    }
  //  }, [third])

  const addWorkerHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredWage = wageInputRef.current.value;
    if (nameInputRef.current.value?.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir isim giriniz.",
      });
      return;
    }
    if (+wageInputRef.current.value < miniWage) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: `Lütfen ${miniWage} değerinde büyük bir maaş değeri giriniz.`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    nameInputRef.current.value = "";
    wageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && <ErrorModal setWorkers={props.setWorkers} onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label className="font-medium">Çalışan İsmi</label>
          <input
            type="text"
            placeholder="Çalışan ismi giriniz"
            id="name"
            className="max-w-[40rem] w-full mx-auto border p-2"
            ref={nameInputRef}
          />
          <label className="font-medium">Maaş Miktarı</label>
          <input
            type="text"
            placeholder="Maaş miktarı giriniz"
            id="wage"
            className="max-w-[40rem] w-full mx-auto border p-2"
            ref={wageInputRef}
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
