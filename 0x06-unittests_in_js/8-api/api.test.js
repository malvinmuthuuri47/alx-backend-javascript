const express = require('express');
const app = require('./api');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Express App tests', () => {
    it('should return a 200 ok for the root route', (done) => {
        request(app).get('/').expect(200).end((err, res) => {
            if (err) return done(err);
            done();
        });
    });

    it('should return the expected message for the root route', (done) => {
        request(app).get('/').expect(200).end((err, res) => {
            if (err) return done(err);
            expect(res.text).to.equal('Welcome to the payment system');
            done();
        });
    });
});
