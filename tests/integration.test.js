const request = require('supertest');
const app = require('../server');

describe('Integration Test - /status endpoint', () => {
  test('should return server running message', async () => {
    const response = await request(app).get('/status');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Server running fine');
  });
});
