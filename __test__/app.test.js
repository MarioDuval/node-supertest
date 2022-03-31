import app from '../app.js';
import supertest from 'supertest';
import { TestWatcher } from '@jest/core';
import bcrypt from 'bcrypt';

const request = supertest(app);
let time = new Date();
//CRUD Create
//Given-when-then
describe ('CRUD Create : POST /user', ()=> {
    describe('Dado (given) un usuario y un password', () => {
        //(Then) Deberia responder status code 200;
        test('(Then) Deberia responder status code 200', async () => {
            const response = await request.post("/user/register").send({
                username: "pep@dominio.es",
                password: "pam"
            });
            expect(response.statusCode).toBe(200);
        })
        
        //(Then) Deberia devolver un 'content-type' json;
        test('(Then) Deberia devolver un content-type json', async () => {
            const response = await request.post("/user/register").send({
                username: "pep@dominio.es",
                password: "pam"
            }).expect("Content-Type",/json/);

            // expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        });
        //(Then) Deberia tener username en el JSON request;
        test('(Then) Deberia tener username en el JSON request', async () => {
            const response = await request.post("/user/register").send({
                username: "pep@dominio.es",
                password: "pam"
            })
            expect(response.body.username).toBeDefined();
        });
        //(Then) ...
    });
});

//CRUD Read
describe ('CRUD Read: GET /login', ()=> {
    describe('Dado (given) un usuario y un password', () => {
        //(Then) Deberia responder status code 200;
        test('(Then) Deberia responder status code 200', async () => {
            const response = await request.get("/user/login").send({
                username: "pep@dominio.es",
                password: "pam"
            });
            expect(response.statusCode).toBe(200);
        })
        //(Then) Deberia responder que hay username
        test("(Then) Deberia responder que hay username", async () => {
            const response = await request.get("/user/login").send({
              username: "pep@dominio.es",
              password: "pam"
            })
            expect(response.body.username).toBeDefined()
          })
        //(Then) Deberia devolver un timestamp
        test('(Then) Deberia devolver un timestamp;', async () => {
            
            const response = await request.get("/user/login").send({
                username: "pep@dominio.es",
                password: "pam",
                timestamp: new Date()
            });
            expect(response.body.timestamp).toBeDefined()
        })
    });
});

//CRUD Upadate
describe ('CRUD Upadate: PUT /update', ()=> {
    describe('Dado (given) un usuario y un password', () => {
        //(Then) Deberia responder status code 200;
        test('(Then) Deberia responder status code 200', async () => {
            const response = await request.put("/user/update").send({
                username: "pep@dominio.es",
                password: "pam"
            });
            expect(response.statusCode).toBe(200);
        })

        //(Then) Deberia responder que hay newpassword
        test("(Then) Deberia responder que hay newpassword", async () => {
            const response = await request.put("/user/update").send({
              username: "pep@dominio.es",
              password: "pam",
              newpassword: "peter"
            })
            expect(response.body.newpassword).toBeDefined()
          })

        //(Then) Deberia responder que hay no hay newpassword
        test('(Then) Deberia responder que hay no hay newpassword', async () => {
            
            const response = await request.put("/user/update").send({
                username: "pep@dominio.es",
                password: "pam",
            });
            expect(response.body.newpassword).toBeUndefined()
        })
    });
});

//CRUD Delete
describe ('CRUD Upadate: DELETE /delete', ()=> {
    describe('Dado (given) un usuario y un password', () => {
        //(Then) Deberia responder status code 200;
        test('(Then) Deberia responder status code 200', async () => {
            const response = await request.delete("/user/delete").send({
                username: "pep@dominio.es",
                password: "pam"
            });
            expect(response.statusCode).toBe(200);
        })
        
    });
});