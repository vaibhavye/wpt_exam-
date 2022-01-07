import axios from "axios";
import { useState } from "react";
export default function App() {
  return (
    <div className="container-fluid">
      <Mycomponent />
    </div>
  );
}

function Mycomponent() {
  const headerApp = "My Whats App";
  const studentName = "Vaibhav Yerawar";
  const studentId = "210940520111";
  const inputcss = "form-control w-100 p-3 rounded-pill ";
  const inputcssError = "form-control w-100 p-3 rounded-pill border-danger";
  const [inputChat, setInputChat] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    const newValue = e.target.value;
    setInputChat(newValue);
  };

  const sendMessage = () => {
    if (inputChat == "") {
      setValidationError(true);
      alert("Empty field not allowed");
      return;
    }

    const newList = [...list, inputChat];
    setList(newList);
    setInputChat("");
    setValidationError(false);
  };

  return (
    <div>
      <div className="row bg-primary p-3">
        <div className="col fs-1 text-light">{headerApp}</div>
        <div className="col fs-3 text-light">
          {studentName} {studentId}
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-10 p-1">
          <input
            type="text"
            name=""
            id=""
            value={inputChat}
            placeholder="Lets Chat Here..."
            className={
              inputChat == `&& validationError ? inputcssError : inputcss`
            }
            onChange={handleInput}
          />
        </div>

        <div className="col-2 p-1">
          <input
            type="button"
            value="Send"
            className="form-control p-3 btn btn-outline-primary border-rounded"
            onClick={sendMessage}
          />
        </div>
      </div>
      <div id="parent">
        {list.map((item) => (
          <div className="alert alert-warning">{item}</div>
        ))}
      </div>
    </div>
  );
}
