'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    if (!(await User.findBy('email', 'gabrielbuzzi@prte.com.br'))) {
      await User.create({
        username: 'gabrielbuzzi',
        email: 'gabrielbuzzi@prte.com.br',
        password: '123456'
      })
    }

    if (!(await User.findBy('email', 'pedrorenana@prte.com.br'))) {
      await User.create({
        username: 'pedrorenan',
        email: 'pedrorenan@prte.com.br',
        password: '123456'
      })
    }
  }
}

module.exports = UserSeeder
