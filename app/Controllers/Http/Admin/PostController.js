"use strict";

const Post = use("App/Models/Post");

class PostController {
  async index({ request, response, auth }) {
    const { is_draft = null, page = 1 } = request.only(['is_draft', 'page'])

    const posts = await Post.query().where(builder => {
      is_draft && builder.where('is_draft', is_draft)
    }).paginate(page, 3);

    return response.status(200).send(posts);
  }
}

module.exports = PostController;
