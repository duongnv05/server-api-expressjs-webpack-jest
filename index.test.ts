import app from './index';
import * as supertest from 'supertest';
describe('app', () => {
  let request: any;
  beforeEach(() => {
    request = supertest.default(app);
  });
  it('should return a successful response for GET /', done => {
    request.get('/')
      .expect(200, done);
  });
});