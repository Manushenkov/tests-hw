import HistoryBlock from "./HistoryBlock";
import Button from "./Button";
import Modal from "./Modal";
import "./styles/History.sass";
import axios from "axios";
import React from 'react';

import { useState, useEffect } from "react";

function History({ isVisible, setIsVisible }) {
  const link = "http://localhost:3001/builds";

  const [history, setHistory] = useState([]);
  const [historySize, setHistorySize] = useState(
    window.innerWidth <= 768 ? 5 : 9
  );
  const [isButtonActive, setisButtonActive] = useState(true);

  useEffect(() => {
    axios
      .get(link, {
        params: {
          offset: 0,
          limit: historySize,
        },
      })
      .then((res) => {
        setHistory(res.data.data);
        console.log(res.data.data);
      });
  }, [historySize]);

  const handleClick = () => {
    setHistorySize((prev) => prev + 5);
    if (historySize > history.length) setisButtonActive(false);
  };

  return (
    <>
      <main className="App__history">
        <div className="container">
          {history.map((e) => (
            <HistoryBlock data={e} />
          ))}
          {isButtonActive && (
            <Button
              text="Show more"
              className="button button_gray"
              onClick={handleClick}
            />
          )}
        </div>
      </main>
      <Modal setIsVisible={setIsVisible} isVisible={isVisible} />
    </>
  );
}
export default History;
