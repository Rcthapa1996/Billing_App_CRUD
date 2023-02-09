import { useEffect, useState } from "react";

import Select from "react-select";
import { FakeNameList } from "./Constants";
import Forms from "./Forms";

import { getAccountName } from "../../../actions/account";

import { useSelector, useDispatch } from "react-redux";

const OldAccount = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nameLists, setNameLists] = useState([]);
  const [selectedName, setSelectedName] = useState(null);
  const { nameList } = useSelector(
    (state: { accountReducer: any }) => state.accountReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getAccountName()(dispatch);
  }, []);

  useEffect(() => {
    const nameTansform = [...nameList]?.map((name) => {
      return { value: name, label: name };
      // return { value: name.en, label: name.np };
    });
    console.log("trans :", nameTansform);
    setNameLists(nameTansform || []);
    setIsLoading(false);
  }, [nameList]);

  return (
    <>
      <h1>This is Old Account</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Select
          onChange={(e) => setSelectedName(e)}
          placeholder="नाम खोज्नुहोस्..."
          options={nameLists}
        />
      )}
      {selectedName && (
        <Forms name={selectedName.label} isTransaction rate={2} />
      )}
    </>
  );
};

export default OldAccount;
