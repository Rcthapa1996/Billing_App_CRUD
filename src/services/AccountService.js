import http from "../http-common";

const getAll = () => {
  return http.get("/account");
};

const getAllName = () => {
  return http.get("/account/allName");
  // return http.get("/account/name");
};

const create = (data) => {
  console.log("Data", data, "Create Request");
  return http.post("/account", data);
};

const AccountService = { getAll, getAllName, create };

export default AccountService;
