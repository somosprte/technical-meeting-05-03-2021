"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, response }, next) {
    if (!auth.user.is_admin) {
      return response.status(401).send({
        error: {
          message: "Essa ação só pode ser executada por administradores.",
        },
      });
    }

    // call next to advance the request
    await next();
  }
}

module.exports = Admin;
