const constants = require('../config')
const makeRequest = require('../service/serve')

// get all groups
const getAllGroups = async (req, res) => {
  //  url
  const url = constants.mnotifyGroupBaseUrl + '?key=' + constants.SECRET_KEY

  const response = await makeRequest('get', {}, url)

  return res.json(response.data)
}

// get individual groups
const getGroupID = async (req, res) => {
  //  url
  const url =
    constants.mnotifyGroupBaseUrl +
    '/' +
    req.params.id +
    '?key=' +
    constants.SECRET_KEY

  const response = await makeRequest('get', {}, url)

  return res.json(response.data)
}

// create new group
const createGroup = async (req, res, next) => {
  //  url
  const url = constants.mnotifyGroupBaseUrl + '?key=' + constants.SECRET_KEY

  // check if the request body is not empty
  if (Object.keys(req.body).length === 0) {
    return next(new Error('All Fields are required'))
  }

  const response = await makeRequest('post', req.body, url)

  return res.json(response.data)
}

// update individual groups
const updateGroupID = async (req, res, next) => {
  const url =
    constants.mnotifyGroupBaseUrl +
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

// delete group
const deleteGroup = async (req, res, next) => {
  const url =
    constants.mnotifyGroupBaseUrl +
    '/' +
    req.params.id +
    '?key=' +
    constants.SECRET_KEY

  const response = await makeRequest('delete', {}, url)

  return res.json(response.data)
}

module.exports = {
  getAllGroups,
  getGroupID,
  createGroup,
  updateGroupID,
  deleteGroup
}
