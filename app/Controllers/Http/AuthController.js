"use strict";

const User = use("App/Models/User");

class AuthController {
  async store({ request, response, auth }) {
    try {
      const { email, password } = request.only(["email", "password"]);

      const user = await User.findBy("email", email);

      if (!user) {
        return response
          .status(404)
          .send({ error: { message: "Usuário não encontrado" } });
      }

      if (!user.is_admin) {
        return response
          .status(401)
          .send({ error: { message: "Apenas usuários admins podem se conectara na api" } });
      }

      const { token } = await auth.attempt(email, password);

      return { token };
    } catch (err) {
      console.log(err);

      return response
        .status(err.status || 500)
        .send({ message: "Não foi possível autenticar" });
    }
  }
}

module.exports = AuthController;
