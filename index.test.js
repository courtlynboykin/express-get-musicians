// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {
    // testing musicians endpoint
    test("Testing musicians endpoint", async () => {
        // Sends request to `/musicians` endpoint
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    })

    test("Testing musicians JSON", async () => {
        const result = await request(app).get("/musicians");
        const resultData = JSON.parse(result.text)
        const name = resultData[1].name
        expect(name).toBe("Drake")
    })
})