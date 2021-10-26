const axios = require("axios");
const constants = require("../config");
const headers = {
  Accept: "application/json",
};

const axiosGetAll = async (base_url) => {
  try {
    const url = base_url + "?key=" + constants.SECRET_KEY;

    return await axios({ method: "get", url: url });
  } catch (error) {
    return error;
  }
};

const axiosGetID = async (base_url, id) => {
  try {
    const url = base_url + "/" + id + "?key=" + constants.SECRET_KEY;

    return await axios({ method: "get", url: url });
  } catch (error) {
    return error;
  }
};

const axiosPost = async (base_url, data) => {
  try {
    const url = base_url + "?key=" + constants.SECRET_KEY;

    return await axios({
      method: "post",
      url: url,
      data: data,
    });
  } catch (error) {
    return error;
  }
};

const axiosPostID = async (base_url, id, data) => {
  try {
    const url = base_url + "/" + id + "?key=" + constants.SECRET_KEY;

    return await axios({ method: "put", url: url, data: data });
  } catch (error) {
    return error;
  }
};

const axiosDeleteID = async (base_url, id) => {
  try {
    const url = base_url + "/" + id + "?key=" + constants.SECRET_KEY;
    console.log(url);

    await axios({ method: "delete", url: url });
  } catch (error) {
    return error;
  }
};

// const axiosGet = async () => {
//   const url =
//     constants.mnotifyGroupBaseUrl.BASE_URL + "?key=" + constants.SECRET_KEY;

//   await axios({ method: "get", url: url })
//     .then((result) => {
//       const response = JSON.stringify(result.data);
//       return response;
//     })
//     .catch((err) => {
//       return err;
//     });
// };

module.exports = {
  axiosGetAll,
  axiosGetID,
  axiosPost,
  axiosPostID,
  axiosDeleteID,
};
