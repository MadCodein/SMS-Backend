const axios = require("axios");
const constants = require("../config");
const { axiosGet } = require("../service/service");

const getAllGroups = async (req, res) => {
  const templateUrl =
    constants.mnotifyGroupBaseUrl.BASE_URL + "?key=" + constants.SECRET_KEY;

  await axios({ method: "get", url: templateUrl })
    .then((result) => {
      return res.send(JSON.stringify(result.data));
    })
    .catch((err) => {
      console.log(err);
      return res.send(err);
    });
  // await axiosGet().then((response) => {
  //   console.log(response);
  // });
};

const getGroup = async (req, res) => {
  const { id } = req.params;
  const templateUrl =
    constants.mnotifyGroupBaseUrl.BASE_URL +
    "/" +
    id +
    "?key=" +
    constants.SECRET_KEY;

  await axios({ method: "get", url: templateUrl })
    .then((result) => {
      return res.send(JSON.stringify(result.data));
    })
    .catch((err) => {
      console.log(err);
      return res.send(err);
    });
};

module.exports = {
  getAllGroups,
  getGroup,
};
