import { useState, useEffect } from "react";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";

import Style from "./AddAccount.module.scss";
import NewAccount from "./NewAccount";
import OldAccount from "./OldAccount";
import { getAccountName } from "../../../actions/account";

import { useDispatch } from "react-redux";

const AddAccount = () => {
  const [isNewAccount, setIsNewAccount] = useState(true);

  return (
    <div className={Style["AddAccount"]}>
      <div className={Style["NewAccount"]}>
        <button
          onClick={() => setIsNewAccount(true)}
          className={Style["newAccBtn"]}
        >
          खाता खोल्नुहोस्
        </button>
        <button
          onClick={() => setIsNewAccount(false)}
          className={Style["transactionBtn"]}
        >
          लेनदेन गर्नुहोस्
        </button>
      </div>
      {isNewAccount ? <NewAccount /> : <OldAccount />}
    </div>
  );
};

export default AddAccount;
