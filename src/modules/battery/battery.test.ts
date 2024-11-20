import request from 'supertest';
import { app } from '../../app';

describe('manageBattery',  () => {
    it('should handle test case a', async() => {
        const response = await request(app)
        .post('/battery')
        .send({ inputs : [25, -30, -70, -10, 20] });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            battery_fully_charged: 1,
            battery_low: 0,
            battery_empty: 2,
            last_battery_percent: 40
        });
    });

    it('should handle test case b', async () => {
        const response = await request(app)
        .post('/battery')
        .send({ inputs : [-20, 30, 30, -60, -40] });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            battery_fully_charged: 1,
            battery_low: 1,
            battery_empty: 1,
            last_battery_percent: 0
        });
    });
});
