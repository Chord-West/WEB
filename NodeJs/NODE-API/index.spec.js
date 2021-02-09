// spec은 테스트하는 코드
const app = require('./index');
const should = require('should');
const request = require('supertest');

describe('GET /users는', ()=>{
   describe('성공시', ()=>{
      it('유저 객체를 담은 배열로 응답', (done)=>{
         request(app)
             .get('/users')
             .end((err,res)=>{
                res.body.should.be.instanceOf(Array); //배열인지 아닌지 검증
                done();
             });
      });
   });

});