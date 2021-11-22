const express = require('express')
const router = express.Router()

const constants = require('../config')
const makeRequest = require('../service/serve')

// get sms balance
router.get('/balance/sms', async (req, res, next) => {
  try {
    //  url
    const url =
      constants.mnotifySMSBalanceBaseUrl + '?key=' + constants.SECRET_KEY

    const response = await makeRequest('get', {}, url)

    return res.json(response.data)
  } catch (error) {
    next(new Error(error))
  }
})

// sms delivery report
router.get('/campaign/:id/:status', async (req, res, next) => {
  try {
    //  url
    const url =
      constants.mnotifySMSDeliveryReportBaseUrl +
      '/' +
      req.params.id +
      '/' +
      req.params.status +
      '?key=' +
      constants.SECRET_KEY

    console.log(url)

    const response = await makeRequest('get', {}, url)

    return res.json(response.data)
  } catch (error) {
    next(new Error(error))
  }
})

// Specific SMS Delivery Report
router.get('/status/:id', async (req, res, next) => {
  try {
    //  url
    const url =
      constants.mnotifySpecificSMSDeliveryReportBaseUrl +
      '/' +
      req.params.id +
      '?key=' +
      constants.SECRET_KEY

    console.log(url)

    const response = await makeRequest('get', {}, url)

    return res.json(response.data)
  } catch (error) {
    next(new Error(error))
  }
})

module.exports = router
