const request = require("supertest");
const app = require("../src/app");

test("POST /analyze works", async () => {
    const res = await request(app)
        .post("/analyze")
        .send({ resume: "test resume" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("score");
});