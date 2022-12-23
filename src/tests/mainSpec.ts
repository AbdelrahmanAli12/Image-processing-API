import supertest from 'supertest';
import app from '../main';

const request = supertest(app);

describe('Test endpoint responses', (): void => {
  it('gets the api endpoint and status code to be 200', async () => {
    const response = await request.get(
      '/api/images?filename=lion&width=500&height=500'
    );
    expect(response.status).toBe(200);
  });
});

describe('Test endpoint is connnected', (): void => {
  it('gets the server is connected', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
