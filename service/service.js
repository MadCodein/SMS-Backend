const axios = require("axios");
const constants = require("../config");

const axiosGet = async () => {
  const templateUrl =
    constants.mnotifyGroupBaseUrl.BASE_URL + "?key=" + constants.SECRET_KEY;

  await axios({ method: "get", url: templateUrl })
    .then((result) => {
      const response = JSON.stringify(result.data);
      return response;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { axiosGet };
