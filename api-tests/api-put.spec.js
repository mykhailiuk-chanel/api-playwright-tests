// @ts-check
const { test, expect } = require('@playwright/test');

const ENDPOINT_UPDATE_USER = "api/users/2";
test('Simple API TEST - PUT mothods', async ({ request }) => {
    const job = "middle developer", name = "update user TEST";

    const result = await request.put(ENDPOINT_UPDATE_USER, {
        data: {
            name,
            job
        }
    });
    const response = JSON.parse(await result.text());
    //
    expect(result.ok()).toBeTruthy();
    expect(response.name).toEqual(name);
    expect(response.job).toEqual(job);
});