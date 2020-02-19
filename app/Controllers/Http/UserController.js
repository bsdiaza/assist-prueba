'use strict'

const User = use('App/Models/User');

class UserController {

  async register ({ auth, request, response }) {
    const { username, password } = request.all()
    
    //Create User
    const user = new User()
    user.username = username
    user.password = password
    await user.save()

    //Generate token
    const token = await auth.generate(user)

    //Return token
    return response.json(token);
  }

  async login ({ auth, request, response }) {
    const { username, password } = request.all()

    // Attempt login
    const token = await auth.attempt(username, password)
    
    // Return session token
    return response.json(token);
  }

}

module.exports = UserController
