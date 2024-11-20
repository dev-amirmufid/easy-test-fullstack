import request from 'supertest';
import {app} from '../../app';

describe('POST /input_validation', () => {
  it('should return valid for input {[]}', async () => {
    const response = await request(app)
      .post('/input_validation')
      .send({ input: '{[]}' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({result:true});
  });

  it('should return valid for input {{{[]}}}', async () => {
    const response = await request(app)
      .post('/input_validation')
      .send({ input: '{{{[]}}}' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({result:true});
  });

  it('should return valid for input [[{}]]', async () => {
    const response = await request(app)
      .post('/input_validation')
      .send({ input: '[[{}]]' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({result:true});
  });

  it('should return not valid for input {[[}]}', async () => {
    const response = await request(app)
      .post('/input_validation')
      .send({ input: '{[[}]}' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({result:false});
  });
});
