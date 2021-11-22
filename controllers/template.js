const constants = require('../config')

const makeRequest = require('../service/serve')

// get all message templates
const getAllMessageTemplates = async (req, res) => {
  try {
    //  url
    const url =
      constants.mnotifyTemplateBaseUrl + '?key=' + constants.SECRET_KEY

    const response = await makeRequest('get', {}, url)

    return res.json(response.data)
  } catch (error) {
    return next(error)
  }
}

// get individual message templates
const getMessageTemplate = async (req, res) => {
  try {
    //  url
    const url =
      constants.mnotifyTemplateBaseUrl +
      '/' +
      req.params.id +
      '?key=' +
      constants.SECRET_KEY

    const response = await makeRequest('get', {}, url)

    return res.json(response.data)
  } catch (error) {
    return next(error)
  }
}

// create new message template
const createMessageTemplate = async (req, res, next) => {
  try {
    //  url
    const url =
      constants.mnotifyTemplateBaseUrl + '?key=' + constants.SECRET_KEY

    // check if the request body is not empty
    if (Object.keys(req.body).length === 0) {
      return next(Error('All Fields are required'))
    }

    const response = await makeRequest('post', req.body, url)

    return res.json(response.data)
  } catch (error) {
    return next(error)
  }
}

// update individual message templates
const updateTemplateID = async (req, res, next) => {
  try {
    const url =
      constants.constants.BASE_URL +
      '/' +
      req.params.id +
      '?key=' +
      constants.SECRET_KEY

    // check if the request body is not empty
    if (Object.keys(req.body).length === 0) {
      return next(new Error('All Fields are required'))
    }

    const response = await makeRequest('put', req.body, url)

    return res.json(response.data)
  } catch (error) {
    return next(error)
  }
}

// delete individual message templates
const deleteTemplate = async (req, res, next) => {
  try {
    //  url
    const url =
      constants.mnotifyTemplateBaseUrl +
      '/' +
      req.params.id +
      '?key=' +
      constants.SECRET_KEY

    const response = await makeRequest('delete', {}, url)

    return res.json(response.data)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getAllMessageTemplates,
  getMessageTemplate,
  createMessageTemplate,
  updateTemplateID,
  deleteTemplate
}
