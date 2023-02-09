import AccountService from "../services/AccountService";
import {
  CREATE_ACCOUNT,
  RETRIVE_ACCOUNT,
  RETRIVE_ACCOUNT_NAME_LIST
} from "./types";

export const createAccount = (data) => async (dispatch) => {
  console.log("Data before service", data);
  const res = await AccountService.create(data);
  console.log(res, "ressss");
  if (res.status === 201) {
    dispatch({ type: CREATE_ACCOUNT, payload: res.data });
  }
};

export const getAccount = () => async (dispatch) => {
  const res = await AccountService.getAll();
  if (res.status === 200) {
    dispatch({ type: RETRIVE_ACCOUNT, payload: [...res.data] });
  }
};

export const getAccountName = () => async (dispatch) => {
  console.log("called get name");
  const res = await AccountService.getAllName();
  if (res.status === 200) {
    console.log("Res:", res.data);
    dispatch({ type: RETRIVE_ACCOUNT_NAME_LIST, payload: [...res.data] });
  }
};
