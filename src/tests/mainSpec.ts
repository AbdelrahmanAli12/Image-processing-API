import supertest from 'supertest';
import app from '../main';
import api from '../routes/api/index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get(
      '/api/images?filename=lion&width=500&height=500'
    );
    expect(response.status).toBe(200);
  });
});

describe('Test endpoint is connnected', () => {
  it('gets the server is connected', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
