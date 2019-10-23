const request = require("supertest");
const server = require("../server");

describe(`GET /`, () => {
  it(`respond with hello world`, done => {
    request(server)
      .get("/")
      .expect(`Hello World`, done);
  });
});
