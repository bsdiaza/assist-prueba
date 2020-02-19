'use strict'

const axios = require('axios')

class TodoController {
  async getTodos({ params, response }){
    const status = params.status
    let query = status == 'completed' ? '?completed=true' : ''
    await axios.get()
  }
}

module.exports = TodoController
