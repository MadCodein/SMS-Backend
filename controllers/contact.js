const constants = require('../config')
const makeRequest = require('../service/serve')

// get all contacts
const getAllContacts = async (req, res, next) => {
  try {
    //  url
    const url = constants.mnotifyContactBaseUrl + '?key=' + constants.SECRET_KEY

    const response = await makeRequest('get', {}, url)

    return res.json(response.data)
  } catch (error) {
    return next(error)
  }
}

// get group contacts
const getGroupContacts = async (req, res, next) => {
  try {
    //  url
    const url =
      constants.mnotifyContactBaseUrl +
      '/group' +
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

// get individual contacts
const getContact = async (req, res, next) => {
  try {
    //  url
    const url =
      constants.mnotifyContactBaseUrl +
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

// create new contact to a particular group id
const createContact = async (req, res, next) => {
  try {
    //  url
    const url =
      constants.mnotifyContactBaseUrl +
      '/' +
      req.params.id +
      '?key=' +
      constants.SECRET_KEY

    // check if the request body is not empty
    if (Object.keys(req.body).length === 0) {
      return next(new Error('All Fields are required'))
    }

    //   return console.log(url);

    const response = await makeRequest('post', req.body, url)

    return res.json(response.data)
  } catch (error) {
    return next(error)
  }
}

// update contact
const updateContact = async (req, res, next) => {
  try {
    const url =
      constants.mnotifyContactBaseUrl +
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

// delete contact
const deleteContact = async (req, res, next) => {
  try {
    const url =
      constants.mnotifyContactBaseUrl +
      '/' +
      req.params.id +
      '/' +
      req.params.group_id +
      '?key=' +
      constants.SECRET_KEY

    const response = await makeRequest('delete', {}, url)

    return res.json(response.data)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getAllContacts,
  getGroupContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
}
