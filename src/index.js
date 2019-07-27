import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function randomizeCancel(cancelMsgs) {
  const randNum = Math.floor(Math.random() * cancelMsgs.length);
  const randMsg = cancelMsgs[randNum];
  return randMsg;
}

const saveMessage = "pepperoni pizza";

function App() {
  const cancelMsgsState = React.useState(["loser", "bummer", "nope"]);
  const cancelMsgs = cancelMsgsState[0];
  const setCancelMsgs = cancelMsgsState[1];

  const valueState = React.useState("");
  const value = valueState[0];
  const setValue = valueState[1];

  const messageState = React.useState("");
  const message = messageState[0];
  const setMessage = messageState[1];

  const statusState = React.useState("");
  const status = statusState[0];
  const setStatus = statusState[1];

  const cancelMessageState = React.useState(cancelMsgs[0]);
  const cancelMessage = cancelMessageState[0];
  const setCancelMessage = cancelMessageState[1];

  return (
    <div>
      <div className="box">New cancel message</div>

      <div className="box">
        <input
          id="newCancelInput"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </div>

      <div className="box">
        <button
          className="btn primary"
          onClick={() => {
            setMessage(saveMessage);
            setStatus("save");
            cancelMsgs.push(value);
            setCancelMsgs(cancelMsgs);
          }}
        >
          save
        </button>
        <button
          className="btn secondary"
          onClick={() => {
            setStatus("cancel");
            setMessage(cancelMessage);
          }}
        >
          cancel
        </button>
        <button
          className="btn secondary"
          onClick={() => {
            setCancelMessage(randomizeCancel(cancelMsgs));
          }}
        >
          shuffle cancel
        </button>
      </div>

      <div className={"box message " + status}>{message}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
