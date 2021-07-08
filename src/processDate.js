export default function processDate(data) {
  let date = Date.parse(data.start);
  date = new Date(date);

  let processedDate = "";
  processedDate += date.getDate() + " ";
  processedDate +=
    [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ][date.getMonth()] + ", ";
  processedDate +=
    date.getHours() < 10 ? "0" + date.getHours() + ":" : date.getHours() + ":";
  processedDate +=
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  return processedDate;
}
