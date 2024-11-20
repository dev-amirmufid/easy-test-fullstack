import request from 'supertest';
import {app} from '../../app';

describe('GET /customers', () => {
  it('should return correct record customer yang tercatat melakukan transaksi atau pemesanan lebih dari 2 kali per bulanya "bambang@mail.com"', async () => {
    const response = await request(app)
      .get('/customers');

    const expectedEmail = ['bambang@mail.com'];

    expect(response.status).toBe(200);
    expect(response.body.filter((customer: any) => expectedEmail.includes(customer.email)).length).toEqual(expectedEmail.length);
  });
});
