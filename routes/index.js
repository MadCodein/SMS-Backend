const express = require("express");
const router = express.Router();

const constants = require("../config");
const makeRequest = require("../service/serve");
const {
  mnotifyGroupBulkSMSBaseUrl,
  mnotifyQuickBulkSMSBaseUrl,
  mnotifySenderIDBaseUrl,
} = require("../config");

// Handle group bulk messaging
// Send SMS to clients/contacts using contacts that you have without storing in any group first
router.post("/sms/quick", async (req, res) => {
  // {
  //        "recipient": ["0552541157"],
  //        "sender": "TestSystem",
  //        "message": "API messaging is fun!"
  // }

  //  url
  const url =
    mnotifyQuickBulkSMSBaseUrl.BASE_URL + "?key=" + constants.SECRET_KEY;

  // check if the request body is not empty
  if (Object.keys(req.body).length === 0) {
    return next(new Error("All Fields are required"));
  }

  const response = await makeRequest("post", req.body, url);

  return res.json(response.data);
});

//Handle group bulk messaging
// Send SMS to clients/contacts using groups you created earlier which has contacts in them
router.post("/sms/group", async (req, res) => {
  //   {
  //        "group_id": ["39525"],
  //        "sender": "TestSystem",
  //        "message_id": 41187
  // }

  //  url
  const url =
    mnotifyGroupBulkSMSBaseUrl.BASE_URL + "?key=" + constants.SECRET_KEY;

  // check if the request body is not empty
  if (Object.keys(req.body).length === 0) {
    return next(new Error("All Fields are required"));
  }

  const response = await makeRequest("post", req.body, url);

  return res.json(response.data);
});

// Register Sender ID
// Register your sender ids to send messages
router.post("/senderid/register", async (req, res) => {
  //   {
  //        "group_id": ["39525"],
  //        "sender": "TestSystem",
  //        "message_id": 41187
  // }

  //  url
  const url = mnotifySenderIDBaseUrl.BASE_URL + "?key=" + constants.SECRET_KEY;

  // check if the request body is not empty
  if (Object.keys(req.body).length === 0) {
    return next(new Error("All Fields are required"));
  }

  const response = await makeRequest("post", req.body, url);

  return res.json(response.data);
});

module.exports = router;
