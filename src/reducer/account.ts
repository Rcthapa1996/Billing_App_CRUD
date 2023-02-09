import {
  CREATE_ACCOUNT,
  RETRIVE_ACCOUNT,
  RETRIVE_ACCOUNT_NAME_LIST
} from "../actions/types";

const accountReducer = (state = { data: [], nameList: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ACCOUNT:
      return { ...state, data: [...state.data, payload] };
    case RETRIVE_ACCOUNT:
      return { ...state, data: payload };
    case RETRIVE_ACCOUNT_NAME_LIST:
      return { ...state, nameList: payload };
    default:
      return state;
  }
};

export default accountReducer;
