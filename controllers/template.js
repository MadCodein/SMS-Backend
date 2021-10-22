const axios = require("axios");
const constants = require("../config");

const getAllMessageTemplates = async (req, res) => {
  const templateUrl =
    constants.mnotifyTemplateBaseUrl.BASE_URL + "?key=" + constants.SECRET_KEY;

  await axios({ method: "get", url: templateUrl })
    .then((result) => {
      return res.send(JSON.stringify(result.data));
    })
    .catch((err) => {
      console.log(err);
      return res.send(err);
    });
};

const getMessageTemplate = async (req, res) => {
  const { id } = req.params;
  const templateUrl =
    constants.mnotifyTemplateBaseUrl.BASE_URL +
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

// const createMessageTemplate = async (req, res) => {
//   const { id } = req.params;
//   const templateUrl =
//     constants.mnotifyTemplateBaseUrl.BASE_URL +
//     "/" +
//     id +
//     "?key=" +
//     constants.SECRET_KEY;

//   await axios
//     .get(templateUrl)
//     .then((result) => {
//       return res.send(JSON.stringify(result.data));
//     })
//     .catch((err) => {
//       console.log(err);
//       return res.send(err);
//     });
// };

module.exports = {
  getAllMessageTemplates,
  getMessageTemplate,
};
