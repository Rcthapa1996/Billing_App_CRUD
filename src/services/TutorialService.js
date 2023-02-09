import http from "../http-common";

const getAll = () => {
  return http.get("/tut");
};

const get = (id) => {
  return http.get(`/tut/${id}`);
};

const findByTitle = (title) => {
  return http.get(`/tut?title=${title}`);
};

const update = (id, data) => {
  return http.put(`/tut/${id}`, data);
};

const create = (data) => {
  return http.post(`/tut`, data);
};

const TutorialService = {
  getAll,
  get,
  findByTitle,
  update,
  create
};

export default TutorialService;
