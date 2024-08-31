import React, { useState } from "react";

import Message from "../components/Message/Message";
import Input from "../components/Input/Input";
import History from "../components/History/History";
import Clear from "../components/Clear/Clear";

import "../App.css";

export default function Chat() {
  const [waitResponse, setWaitResponse] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);

  const handleSubmit = async () => {
    const prompt = {
      role: "user",
      content: input
    };
    setMessages([...messages, prompt]);
    setInput("");
    setWaitResponse(true)
  };

  const clear = () => {
    setMessages([]);
    setHistory([]);
    setInput("");
    setWaitResponse(false)
  };

  return (
    <div className="App">
      <div className="Column">
        <h3 className="Title">Chat Messages</h3>
        <div className="Content">
          {messages.map((el, index) => {
            return <Message key={index} role={el.role} content={el.content} />;
          })}
        </div>
        <Input
          value={input}
          disabled={waitResponse ? "disabled" : ""}
          onChange={(e) => setInput(e.target.value)}
          onClick={input ? handleSubmit : undefined}
        />
      </div>
      <div className="Column">
        <h3 className="Title">History</h3>
        <div className="Content">
          {history.map((el, index) => {
            return (
              <History
                key={index}
                question={el.question}
                onClick={() =>
                  setMessages([
                    { role: "user", content: history[i].question },
                    { role: "assistant", content: history[i].answer }
                  ])
                }
              />
            );
          })}
        </div>
        <Clear onClick={clear} />
      </div>
    </div>
  );
}
