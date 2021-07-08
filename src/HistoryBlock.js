import processDate from "./processDate";
import React from 'react';

function HistoryBlock({ data }) {
  let statusClass;
  if (data.status === "Success") {
    statusClass = "history__status-succ";
  } else if (data.status === "InProgress") {
    statusClass = "history__status-wait";
  } else {
    statusClass = "history__status-fail";
  }

  return (
    <div className="history__block">
      <div className="history__main">
        <div className="history__title">
          <div className={"title__id " + statusClass}>{data.id}</div>
          <div className="title__title">{data.title}</div>
        </div>
        <div className="history__info">
          <div className="info__branch">{data.branchName}</div>
          <div className="info__hash">{data.hash}</div>
          <div className="info__name">{data.authorName}</div>
        </div>
      </div>
      <div className="history__time">
        <div className="time__date">{processDate(data)}</div>
        <div className="time__time">
          {Math.floor(data.duration / 60)} ч {data.duration % 60} мин
        </div>
      </div>
    </div>
  );
}
export default HistoryBlock;
