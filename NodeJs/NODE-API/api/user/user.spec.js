// 테스트코드

// spec은 테스트하는 코드
const app = require('../../index');
const should = require('should');
const request = require('supertest');

// 유저 조회 API
describe('GET /users는', () =>{
    describe('성공시', ()=>{
        it('유저 객체를 담은 배열로 응답', (done)=>{
            request(app)
                .get('/users')
                .end((err,res)=>{
                    res.body.should.be.instanceOf(Array); //배열인지 아닌지 검증
                    done();
                });
        });

        it('최대 limit 갯수만큼 응답한다',(done) => {
            request(app)
                .get('/users?limit=2') // limit 값 설정 ( 유저리스트를 2개만 받겠다. )
                .end((err,res)=>{
                    res.body.should.have.lengthOf(2);
                    done();
                });
        });
    });
    describe('실패시', ()=> {
        it('limit이 숫자형이 아니면 400을 응답한다', (done) => {
            request(app)
                .get('/users?limit=two')
                .expect(400)
                .end(done);
        });
    });


});

// 유저 id 조회 API
describe('GET /users/:id는', () => {
    describe('성공시',() => {
        it('id가 1인 유저 객체를 반환한다', (done) => {
            request(app)
                .get('/users/1')
                .end((err,res) => {
                    res.body.should.have.property('id',1);
                    done();
                });
        });
    });
    describe('실패시',()=> {
        it('id가 숫자가 아닐 경우 400으로 응답', (done) => {
            request(app)
                .get('/users/one')
                .expect(400)
                .end(done)
        });
        it('id로 유저를 찾을수 없을 경우 404로 응답', (done) => {
            request(app)
                .get('/users/999')
                .expect(404)
                .end(done);
        });
    });
});

// 유저 삭제 API
describe('DELETE /users/:id', () => {
    describe('성공시',() => {
        it('204를 응답한다', (done)=>{
            request(app)
                .delete('/users/1')
                .expect(204)
                .end(done);
        });
    });
    describe('실패시',() => {
        it('id가 숫자가 아닐경우 400으로 응답한다.',(done) => {
            request(app)
                .delete('/users/one')
                .expect(400)
                .end(done);
        });
    });
});

// 사용자 추가 API
describe('POST /users', () => {
    describe('성공시',() => {
        let body;
        let name = 'daniel'
        before((done)=>{
            request(app)
                .post('/users')
                .send({name:name})
                .expect(201)
                .end((err,res) => {
                    body=res.body;
                    done();
                });
        }); // 테스트케이스가 작동하기전에 미리 동작하는 함수
        it('생성된 유저 객체를 반환한다.', () => {
            body.should.have.property('id'); //id가 있는지 없는지
        });
        it('입력한  name을 반환한다.', () => {
            body.should.have.property('name', name);
        });
    });
    describe('실패시',() => {
        it('name 파라매터 누락시 400을 반환한다', (done) =>{
            request(app)
                .post('/users')
                .send({})
                .expect(400)
                .end(done);
        });
        it('name이 중복일 경우 409를 반환한다.', (done) => {
            request(app)
                .post('/users')
                .send({name:'daniel'})
                .expect(409)
                .end(done);
        });
    });
});

// 사용자 수정 API
describe('PUT /users/:id',() => {
    describe('성공시',() => {
        it('변경된 name을 응답한다.',(done)=>{
            const name = 'chally';
            request(app)
                .put('/users/3')
                .send({name:name})
                .end((err,res) => {
                    res.body.should.property('name',name);
                    done();
                });
        });
    });
    describe('실패시',() => {
        it('정수가 아닌 id일 경우 400을 을답한다.',(done)=>{
            request(app)
                .put('/users/one')
                .expect(400)
                .end(done);
        });
        it('name이 없을 경우 400을 을답한다.',(done)=>{
            request(app)
                .put('/users/1')
                .send({})
                .expect(400)
                .end(done);
        });
        it('없는 유저일 경우 404을 을답한다.',(done)=>{
            request(app)
                .put('/users/999')
                .send({name:'foo'})
                .expect(404)
                .end(done);
        });
        it('이름이 중복일 경우 409을 을답한다.',(done)=>{
            request(app)
                .put('/users/3')
                .send({name:'bek'})
                .expect(409)
                .end(done);
        });


    });
});