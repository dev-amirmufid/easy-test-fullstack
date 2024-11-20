import request from 'supertest';
import {app} from '../../app';

describe('POST /company', () => {
  it('should return correct total_data and company_list for input a', async () => {
    const input = [
      "Korma Jaya Utama", "Aneka Sari Food", "Sari Wangi", "ABC", "ABC", 
      "Cipta Rasa", "Sumber Rasa", "Damai", "Damai", "Arta Nusa", "Cipta Sari", 
      "Indofood", "Adinata", "Korma Jaya Utama", "Aneka Sari Food", "Sari Wangi", 
      "ABC", "ABC", "Cipta Rasa", "Sumber Rasa", "Damai", "Damai", "Arta Nusa", 
      "Cipta Sari", "Indofood", "Adinata", "Korma Jaya Utama", "Aneka Sari Food", 
      "Sari Wangi", "ABC", "ABC", "Cipta Rasa", "Sumber Rasa", "Damai", "Damai", 
      "Arta Nusa", "Cipta Sari", "Indofood", "Korma Jaya Utama", "Aneka Sari Food", 
      "Sari Wangi", "ABC", "ABC", "Cipta Rasa", "Sumber Rasa", "Damai", "Damai", 
      "Arta Nusa", "Cipta Sari", "Indofood", "Korma Jaya Utama", "Aneka Sari Food", 
      "Sari Wangi", "ABC", "Sumber Rasa", "Damai", "Damai", "Arta Nusa", "Cipta Sari", 
      "Indofood", "Adinata", "Korma Jaya Utama", "Aneka Sari Food", "Sari Wangi", 
      "ABC", "ABC", "Cipta Rasa", "Sumber Rasa", "Damai", "Damai", "Arta Nusa", 
      "Cipta Sari", "Indofood", "Korma Jaya Utama", "Aneka Sari Food", "Sari Wangi", 
      "ABC", "ABC", "Cipta Rasa", "Sumber Rasa", "Damai", "Damai", "Arta Nusa", 
      "Cipta Sari", "Indofood"
    ];
    const expectedOutput = {
      total_data: 9,
      company_list: [
        "ABC", "Aneka Sari Food", "Arta Nusa", "Cipta Sari", "Damai", 
        "Indofood", "Korma Jaya Utama", "Sari Wangi", "Sumber Rasa"
      ]
    };

    const response = await request(app)
      .post('/company')
      .send({ input });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedOutput);
  });

  it('should return correct total_data and company_list for input b', async () => {
    const input = [
      "Aneka Sari Food", "Sari Wangi", "ABC", "ABC", "Cipta Rasa", 
      "Sumber Rasa", "Damai", "Damai", "Arta Nusa", "Cipta Sari", "Indofood", 
      "Adinata", "Aneka Sari Food", "Sari Wangi", "ABC", "ABC", "Cipta Rasa", 
      "Sumber Rasa", "Damai", "Damai", "Arta Nusa", "Cipta Sari", "Indofood", 
      "Adinata", "Aneka Sari Food", "Sari Wangi", "ABC", "ABC", "Cipta Rasa", 
      "Sumber Rasa", "Damai", "Damai", "Arta Nusa", "Cipta Sari", "Indofood", 
      "Aneka Sari Food", "Sari Wangi", "ABC", "ABC", "Cipta Rasa", "Sumber Rasa", 
      "Damai", "Damai", "Arta Nusa", "Cipta Sari", "Indofood", "Korma Jaya Utama", 
      "Aneka Sari Food", "Sari Wangi", "ABC", "Sumber Rasa", "Damai", "Damai", 
      "Arta Nusa", "Cipta Sari", "Indofood", "Adinata", "Korma Jaya Utama", 
      "Aneka Sari Food", "Sari Wangi", "ABC", "ABC", "Cipta Rasa", "Sumber Rasa", 
      "Damai", "Damai", "Arta Nusa", "Cipta Sari", "Indofood", "Korma Jaya Utama", 
      "Aneka Sari Food", "Sari Wangi", "ABC", "ABC", "Cipta Rasa", "Sumber Rasa", 
      "Damai", "Damai", "Arta Nusa", "Cipta Sari", "Indofood"
    ];
    const expectedOutput = {
      total_data: 8,
      company_list: [
        "ABC", "Aneka Sari Food", "Arta Nusa", "Cipta Sari", "Damai", 
        "Indofood", "Sari Wangi", "Sumber Rasa"
      ]
    };

    const response = await request(app)
      .post('/company')
      .send({ input });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedOutput);
  });

  it('should return correct total_data and company_list for input c', async () => {
    const input = [
      "Aneka Sari Food", "Sari Wangi", "ABC", "ABC", "Cipta Rasa", 
      "Sumber Rasa", "Damai", "Damai", "Arta Nusa", "Cipta Sari", "Indofood", 
      "Adinata", "Aneka Sari Food", "Sari Wangi", "Cipta Rasa", "Sumber Rasa", 
      "Damai", "Damai", "Arta Nusa", "Cipta Sari", "Indofood", "Adinata", 
      "Aneka Sari Food", "Sari Wangi", "Cipta Rasa", "Sumber Rasa", "Damai", 
      "Damai", "Arta Nusa", "Cipta Sari", "Indofood", "Aneka Sari Food", 
      "Sari Wangi", "Cipta Rasa", "Sumber Rasa", "Damai", "Damai", "Arta Nusa", 
      "Cipta Sari", "Indofood", "Korma Jaya Utama", "Aneka Sari Food", 
      "Sari Wangi", "ABC", "Sumber Rasa", "Damai", "Damai", "Arta Nusa", 
      "Cipta Sari", "Indofood", "Adinata", "Korma Jaya Utama", "Aneka Sari Food", 
      "Sari Wangi", "ABC", "ABC", "Cipta Rasa", "Sumber Rasa", "Damai", 
      "Damai", "Arta Nusa", "Cipta Sari", "Indofood", "Korma Jaya Utama", 
      "Aneka Sari Food", "Sari Wangi", "ABC", "ABC", "Cipta Rasa", "Sumber Rasa", 
      "Damai", "Damai", "Arta Nusa", "Cipta Sari", "Indofood"
    ];
    const expectedOutput = {
      total_data: 9,
      company_list: [
        "ABC", "Aneka Sari Food", "Arta Nusa", "Cipta Rasa", "Cipta Sari", 
        "Damai", "Indofood", "Sari Wangi", "Sumber Rasa"
      ]
    };

    const response = await request(app)
      .post('/company')
      .send({ input });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedOutput);
  });
});
