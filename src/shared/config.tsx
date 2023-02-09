import React from "react";

// Config
import { TableConfigType } from "./TableTypes";

const TableConfig: TableConfigType[] = [
  {
    header: "ID",
    key: "id",
    render: (val) => (
      <p
        onClick={() => {
          console.log("ID Clicked", val);
          // rowClickHandler(id);
        }}
      >
        {val}
      </p>
    )
  },
  {
    header: "Title",
    key: "title"
  },
  {
    header: "Description",
    key: "description"
  },
  {
    header: "Description",
    key: "published",
    render: (val: boolean) => (val ? "Published" : "Not Published")
  },
  {
    header: "Published",
    key: "published",
    render: (val: boolean) => (val ? "Published" : "Not Published")
  },
  {
    header: "See Details",
    key: "published",
    render: (val) => (
      <button
        onClick={() => {
          console.log("Open Clicked", val);
          // setCurrentTutorial(data);
        }}
      >
        Open
      </button>
    )
  }
];

export default TableConfig;
