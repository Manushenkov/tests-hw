import HistoryBlock from "./HistoryBlock";
import Header from "./Header";
import axios from "axios";
import "./styles/Details.sass";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import React from 'react';

import cog from "./public/cog.svg";
import rebuild from "./public/rebuild.svg";

var Convert = require("ansi-to-html");
var convert = new Convert();

function Details({ repoName }) {
  let { number } = useParams();

  const postLink = "http://localhost:3001/buildsPost/";

  const headerButtons = [
    {
      src: rebuild,
      text: "Rebuild",
      cb: () => {
        console.log('click')
        axios.get(postLink + hash).then((res) => {
          console.log(res.data);
          setId(res.data.id);
        });
      },
    },
    {
      src: cog,
      text: "",
      href: `/settings`,
    },
  ];
  
  const link = `http://localhost:3001/builds/${number}`;
  const [historyBlock, setHistoryBlock] = useState([]);
  const [logs, setLogs] = useState("");
  const [id, setId] = useState();
  const [hash, setHash] = useState();

  useEffect(() => {
    axios.get(link).then((res) => {
      setHistoryBlock(res.data.data);
      setHash(res.data.data.commitHash);
      console.log(res.data.data, "dsfg");
    });
  }, [link]);

  useEffect(() => {
    axios.get(link + "/logs").then((res) => {
      setLogs(res.data);
      console.log(res.data, "logs");
    });
  }, [link]);

  return (
    <>
      {id ? <Redirect push to={"/build/" + id} /> : null}

      <Header title={repoName} buttons={headerButtons} />

      <main className="App__details">
        <div className="container">
          <HistoryBlock data={historyBlock} />
          <p className="commitMessage">{convert.toHtml(logs)}</p>
        </div>
      </main>
    </>
  );
}
export default Details;
