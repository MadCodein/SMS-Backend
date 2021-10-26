const express = require("express");
const router = express.Router();

const constants = require("../config");
const makeRequest = require("../service/serve");
const {
  mnotifySMSBalanceBaseUrl,
  mnotifySMSDeliveryReportBaseUrl,
  mnotifySpecificSMSDeliveryReportBaseUrl,
} = require("../config");

// get sms balance
router.get("/balance/sms", async (req, res) => {
  //  url
  const url =
    mnotifySMSBalanceBaseUrl.BASE_URL + "?key=" + constants.SECRET_KEY;

  const response = await makeRequest("get", {}, url);

  return res.json(response.data);
});

// sms delivery report
router.get("/campaign/:id/:status", async (req, res) => {
  //  url
  const url =
    mnotifySMSDeliveryReportBaseUrl.BASE_URL +
    "/" +
    req.params.id +
    "/" +
    req.params.status +
    "?key=" +
    constants.SECRET_KEY;

  console.log(url);
  const response = await makeRequest("get", {}, url);

  return res.json(response.data);
});

// Specific SMS Delivery Report
router.get("/status/:id", async (req, res) => {
  //  url
  const url =
    mnotifySpecificSMSDeliveryReportBaseUrl.BASE_URL +
    "/" +
    req.params.id +
    "?key=" +
    constants.SECRET_KEY;

  console.log(url);
  const response = await makeRequest("get", {}, url);

  return res.json(response.data);
});

module.exports = router;
