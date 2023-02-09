import React from "react";

// Config
import { TableConfigType } from "./TableTypes";

const AccountTableConfig: TableConfigType[] = [
  {
    header: "ID",
    key: "id",
    render: (val) => (
      <p
        onClick={() => {
          console.log("ID Clicked", val);
        }}
      >
        {val}
      </p>
    )
  },
  {
    header: "Name",
    key: "name"
  },
  {
    header: "Address",
    key: "address"
  },
  {
    header: "Principal",
    key: "principal"
  },
  {
    header: "Rate",
    key: "rate"
    // render: (val: boolean) => (val ? "Published" : "Not Published")
  },
  {
    header: "Date of Issue",
    key: "dateOfIssue"
    // render: (val) => {
    //   // console.log(val, "val");
    //   return val;
    // }
    // render: (val) => (
    //   <button
    //     onClick={() => {
    //       console.log("Open Clicked", val);
    //       // setCurrentTutorial(data);
    //     }}
    //   >
    //     Open
    //   </button>
    // )
  },
  {
    header: "Total Intrest",
    key: "totalIntrest"
    // render: (val: boolean) => (val ? "Published" : "Not Published")
  },
  {
    header: "Total Amount",
    key: "totalAmount"
    // render: (val: boolean) => (val ? "Published" : "Not Published")
  }
];

export default AccountTableConfig;
