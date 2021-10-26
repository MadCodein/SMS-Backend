const constants = require("../config");
const makeRequest = require("../service/serve");
const { mnotifyContactBaseUrl } = require("../config");

// get all contacts
const getAllContacts = async (req, res) => {
  //  url
  const url = mnotifyContactBaseUrl.BASE_URL + "?key=" + constants.SECRET_KEY;

  const response = await makeRequest("get", {}, url);

  return res.json(response.data);
};

// get group contacts
const getGroupContacts = async (req, res) => {
  //  url
  const url =
    mnotifyContactBaseUrl.BASE_URL +
    "/group" +
    "/" +
    req.params.id +
    "?key=" +
    constants.SECRET_KEY;

  const response = await makeRequest("get", {}, url);

  return res.json(response.data);
};

// get individual contacts
const getContact = async (req, res) => {
  //  url
  const url =
    mnotifyContactBaseUrl.BASE_URL +
    "/" +
    req.params.id +
    "?key=" +
    constants.SECRET_KEY;

  const response = await makeRequest("get", {}, url);

  return res.json(response.data);
};

// create new contact to a particular group id
const createContact = async (req, res, next) => {
  //  url
  const url =
    mnotifyContactBaseUrl.BASE_URL +
    "/" +
    req.params.id +
    "?key=" +
    constants.SECRET_KEY;

  // check if the request body is not empty
  if (Object.keys(req.body).length === 0) {
    return next(new Error("All Fields are required"));
  }

  //   return console.log(url);

  const response = await makeRequest("post", req.body, url);

  return res.json(response.data);
};

// update contact
const updateContact = async (req, res, next) => {
  const url =
    mnotifyContactBaseUrl.BASE_URL +
    "/" +
    req.params.id +
    "?key=" +
    constants.SECRET_KEY;

  // check if the request body is not empty
  if (Object.keys(req.body).length === 0) {
    return next(new Error("All Fields are required"));
  }

  const response = await makeRequest("put", req.body, url);

  return res.json(response.data);
};

// delete contact
const deleteContact = async (req, res, next) => {
  const url =
    mnotifyContactBaseUrl.BASE_URL +
    "/" +
    req.params.id +
    "/" +
    req.params.group_id +
    "?key=" +
    constants.SECRET_KEY;

  const response = await makeRequest("delete", {}, url);

  return res.json(response.data);
};

module.exports = {
  getAllContacts,
  getGroupContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
