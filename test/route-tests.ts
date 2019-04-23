import 'mocha';
import assert from 'assert';
import supertest, { SuperTest } from 'supertest';
import app from '../src';

const request = supertest(app);

describe('Route /', () => {
  it('returns a 200 response', async () => {
    const res: supertest.Response = await request.get('/');
    assert.equal(res.status, 200);
  });
});

describe('Route /no-path', () => {
  it('returns a 404 response', async () => {
    const res: supertest.Response = await request.get('/no-path');
    assert.equal(res.status, 404);
  });
});

describe('Route /other-routes', () => {
  it('returns a 200 response', async () => {
    const res: supertest.Response = await request.get('/other-routes');
    assert.equal(res.status, 200);
  });
});

describe('Route /other-routes/slow', () => {
  it('returns a 200 response', async function() {
    // `this` context requires a non-arrow function, hence the `function` keyword above
    this.timeout(4000); // extend the default timeout
    const res: supertest.Response = await request.get('/other-routes/slow');
    assert.equal(res.status, 200);
  });
});

describe('Route /other-routes/fast', () => {
  it('returns a 200 response', async () => {
    const res: supertest.Response = await request.get('/other-routes/fast');
    assert.equal(res.status, 200);
  });
});
