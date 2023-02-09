import { nepaliDateInWord } from "../Utills/dateConvert";
import { nepaliAmountFormat } from "nepali-number";

// Config
import { TableConfigType } from "./TableTypes";

const TransactionTableConfig: TableConfigType[] = [
  {
    header: "मिति",
    key: "dateOfIssue",
    data: ["from", "bs"],
    width: "100px"
    // render: (val) => nepaliDateInWord(val)
  },
  {
    header: "रकम",
    key: "principal",
    width: "100px",
    render: (val) => nepaliAmountFormat(val, 0, "ne")
  },
  {
    header: "दर",
    key: "rate",
    width: "100px",
    render: (val) => nepaliAmountFormat(val, 0, "ne")
  },
  {
    header: "ब्याज",
    key: "totalIntrest",
    width: "100px",
    render: (val) => nepaliAmountFormat(val, 0, "ne")
  },
  {
    header: "कुल रकम",
    key: "totalAmount",
    width: "100px",
    render: (val) => nepaliAmountFormat(val, 0, "ne")
  }
];

export default TransactionTableConfig;
