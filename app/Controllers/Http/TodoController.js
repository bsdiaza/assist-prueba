'use strict'

const axios = require('axios')

class TodoController {
  async getTodos({ request, response }){
    const { completed } = request.get()
    let query = completed ? `?completed=${completed}` : ''
    const url = `https://jsonplaceholder.typicode.com/todos${query}`
    await axios.get(url)
      .then(res=>{
        return response.json(res.data)
      }).catch(err=>{
        return response.json({ error: "Ha ocurrido un error", api_response = err.response.statusText })
      })
  }
}

module.exports = TodoController
