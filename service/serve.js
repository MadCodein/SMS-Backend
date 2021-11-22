const axios = require('axios')
const { on } = require('nodemon')

const makeRequest = async (method, data = {}, route) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'JWT fefege...'
  }

  // Handle GET requests
  if (method == 'GET' || method == 'get') {
    try {
      let response = await axios.get(route)

      return response
    } catch (error) {
      throw error.response
    }
  }

  // handle POST requests
  if (method == 'POST' || method == 'post') {
    try {
      let response = await axios.post(route, data, {
        headers: headers
      })
      return response
    } catch (error) {
      throw error.response
    }
  }

  // Handle PUT requests
  if (method == 'PUT' || method == 'put') {
    try {
      let response = await axios.put(route, data, {
        headers: headers
      })
      return response
    } catch (error) {
      throw error.response
    }
  }

  // Handle DELETE requests
  if (method == 'DELETE' || method == 'delete') {
    try {
      let response = await axios.delete(route, {
        headers: headers
      })
      return response
    } catch (error) {
      throw error.response
    }
  }
}

module.exports = makeRequest
