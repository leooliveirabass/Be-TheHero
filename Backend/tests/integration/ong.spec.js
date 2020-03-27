const request = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/database/conection')

describe('ONG', () => {
    beforeEach(async () => { 
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Miados e Latidos",
                email: "fabiana.murray@teste.com",
                whatsapp: "13981233238",
                city: "São Paulo",
                uf: "SP"
            })
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8)
    })
})