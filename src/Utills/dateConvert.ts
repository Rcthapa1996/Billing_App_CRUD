import NepaliDate from "nepali-date-converter";
import { DDMMMMYYYY } from "../shared/Constants/DATE_CONSTANTS";

NepaliDate.language = "np";
const todayDate = (format = DDMMMMYYYY) => {
  return new NepaliDate().format(format);
};

const nepaliDateInWord = (date) => {
  return new NepaliDate(date).format(DDMMMMYYYY);
};
const dateDifference = (from, to = new NepaliDate()) => {
  const fromObj = new NepaliDate(from).getDateObject();
  const toObj =
    typeof to === "string"
      ? new NepaliDate(to).getDateObject()
      : to.getDateObject();
  const { year: fromYear, month: fromMonth, date: fromDate } = fromObj.BS;
  let { year: toYear, month: toMonth, date: toDate } = toObj.BS;

  if (fromDate > toDate) {
    toDate += 30;
    toMonth--;
  }

  if (fromMonth > toMonth) {
    toMonth += 12;
    toYear--;
  }

  return {
    years: toYear - fromYear,
    months: toMonth - fromMonth,
    days: toDate - fromDate
  };
};

const totalMonths = (years, months) => {
  return years * 12 + months;
};

export { nepaliDateInWord, dateDifference, todayDate, totalMonths };
