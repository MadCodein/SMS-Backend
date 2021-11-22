const constants = require('../config')

const makeRequest = require('../service/serve')

// get all message templates
const getAllMessageTemplates = async (req, res) => {
  //  url
  const url = constants.mnotifyTemplateBaseUrl + '?key=' + constants.SECRET_KEY

  const response = await makeRequest('get', {}, url)

  return res.json(response.data)
}

// get individual message templates
const getMessageTemplate = async (req, res) => {
  //  url
  const url =
    constants.mnotifyTemplateBaseUrl +
    '/' +
    req.params.id +
    '?key=' +
    constants.SECRET_KEY

  const response = await makeRequest('get', {}, url)

  return res.json(response.data)
}

// create new message template
const createMessageTemplate = async (req, res, next) => {
  //  url
  const url = constants.mnotifyTemplateBaseUrl + '?key=' + constants.SECRET_KEY

  // check if the request body is not empty
  if (Object.keys(req.body).length === 0) {
    return next(new Error('All Fields are required'))
  }

  const response = await makeRequest('post', req.body, url)

  return res.json(response.data)
}

// update individual message templates
const updateTemplateID = async (req, res, next) => {
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
}

// delete individual message templates
const deleteTemplate = async (req, res, next) => {
  //  url
  const url =
    constants.mnotifyTemplateBaseUrl +
    '/' +
    req.params.id +
    '?key=' +
    constants.SECRET_KEY

  const response = await makeRequest('delete', {}, url)

  return res.json(response.data)
}

module.exports = {
  getAllMessageTemplates,
  getMessageTemplate,
  createMessageTemplate,
  updateTemplateID,
  deleteTemplate
}
