"use strict";

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/Post", async (faker) => {
  return {
    title: faker.sentence({ words: 4 }),
    description: faker.paragraph({ sentences: 2 }),
    is_draft: faker.bool({ likelihood: 60 }),
  };
});

class PostSeeder {
  async run() {
    await Factory.model("App/Models/Post").createMany(20);
  }
}

module.exports = PostSeeder;
