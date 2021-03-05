"use strict";

const Post = use("App/Models/Post");

class PostController {
  async index({ request, response }) {
    const { page } = request.only(["page"]);
    const posts = await Post.query().where("is_draft", false).paginate(page, 2);

    return response.status(200).send(posts);
  }


}

module.exports = PostController;
