import { useState } from "react";

import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";

import Style from "./AddAccount.module.scss";
import InitialFormData from "./Constants";
import { createAccount } from "../../../actions/account";
import { useDispatch } from "react-redux";
import Input from "./Input";

const Forms = (props) => {
  const { name, rate, isTransaction } = props;
  const numToNepaliWords = require("num-to-nep-words");
  const dispatch = useDispatch();
  const [data, setData] = useState({
    ...InitialFormData,
    name: name,
    rate: rate
  });
  const [transactionData, setTransactionData] = useState(
    InitialFormData.transactionDetails
  );
  const handleChange = ({ value, name }) => {
    console.log("Handle Change", value, name, "Data", data, transactionData);
    if (name === "principal" || name === "rate" || name === "from")
      setTransactionData({ ...transactionData, [name]: value });
    else setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log("Submit clicked", data);

    createAccount(data)(dispatch);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className={Style["form"]}>
      <Input
        label="नाम:"
        autoFocus={!isTransaction}
        disabled={isTransaction}
        required
        name="name"
        type="text"
        value={name || data.name}
        handleChange={handleChange}
      />

      {transactionData.principal !== "0" &&
        transactionData.principal !== "" && (
          <div>{numToNepaliWords(transactionData.principal, "np")}</div>
        )}
      <Input
        label="मूल रकम:"
        autoFocus={isTransaction}
        required
        name="principal"
        type="number"
        handleChange={handleChange}
      />
      <Input
        label="दर:"
        required
        value={data.rate}
        name="rate"
        type="number"
        handleChange={handleChange}
        min="0"
        max="4"
        step="0.5"
      />
      {!name && (
        <>
          <label>
            <div>ठेगाना:</div>
            <select
              name="address"
              onChange={(e) => {
                handleChange({ value: e.target.value, name: e.target.name });
              }}
            >
              <option value="Fattepur">Fattepur</option>
              <option value="Ambasi">Ambasi</option>
              <option value="Kali Khola">Kali Khola</option>
              <option value="Sakhubani">Sakhubani</option>
              <option value="Shidhipur">Shidhipur</option>
            </select>
          </label>
          <label>
            <div>संपर्क नम्बर:</div>
            <input
              onChange={(e) => {
                handleChange({ value: e.target.value, name: e.target.name });
              }}
              required
              pattern="[9]{1}[0-9]{9}"
              type="tel"
              name="contact"
            />
          </label>
        </>
      )}
      <label>
        <div>जारी मिति:</div>
        <Calendar
          className={Style["calender"]}
          required
          name={"from"}
          value={transactionData.from.bs}
          language="en"
          dateFormat="YYYY-MM-DD"
          onChange={({ bsDate }) => {
            handleChange({ value: bsDate, name: "from" });
          }}
          label="दर"
          theme="default"
        />
      </label>
      <input
        className={Style["button"]}
        value="खाता खोल्नुहोस्"
        type="submit"
      />
    </form>
  );
};

export default Forms;
