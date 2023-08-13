// @ts-check
const { test, expect } = require('@playwright/test');

const ENDPOINT_CREATE_USER = "/api/users";
test('Simple API TEST - POST mothods', async ({ request }) => {
    const job = "developer", name = "TEST-Playwright";

    const result = await request.post(ENDPOINT_CREATE_USER, {
        data: {
            name,
            job
        }
    });
    const response = JSON.parse(await result.text());
    //
    expect(result.status()).toEqual(201);
    expect(response.name).toEqual(name);
    expect(response.job).toEqual(job);
});