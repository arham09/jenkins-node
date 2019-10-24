const supertest = require("supertest");
const server = require("../server");

describe("GET /", function() {
  it("respond with json containing a list of all users", function(done) {
    supertest(server)
      .get("/")
      .expect(200, done);
  });
});
