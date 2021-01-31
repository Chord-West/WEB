//function* generator임 generator은 yield를 넣어주면 그 지점에서 멈춤
import {all,fork,call,take,put,takeEvery,takeLatest,delay} from 'redux-saga/effects'; // saga의 이펙드들 ,put은 dispatch라고 생각
import axios from 'axios';

function logInAPI(data){
    return axios.post('/api/login',data);
}
function logOutAPI(){
    return axios.post('/api/logout');
}
function addPostAPI(data){
    return axios.post('/api/post',data);
}

// call과 fork 의 차이는 fork는 비동기, call은 동기
function* logIn(action){
    try {
        // const result= yield call(logInAPI,action.data);
        yield delay(1000);
        yield put({
            type : 'LOG_IN_SUCCESS',

        });
    }catch(err){
        yield put({
           type : 'LOG_IN_FAILURE',
           data : err.response.data,
        });
    }
}
function* logOut(){
    try {
        //const result= yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type : 'LOG_OUT_SUCCESS',
            //data : result.data,
        });
    }catch(err){
        yield put({
            type : 'LOG_OUT_FAILURE',
            data : err.response.data,
        });
    }
}
function* addPost(action){
    try {
        //const result= yield call(addPostAPI,action.data);
        yield delay(1000);
        yield put({
            type : 'ADD_POST_SUCCESS',
           // data : result.data,
        });
    }catch(err){
        yield put({
            type : 'ADD_POST_FAILURE',
            data : err.response.data,
        });
    }
}

//takeLatest 실수로 2번 클릭한거 방지 ( 마지막 클릭한 것을 실행 )
function* watchLogIn(){
    yield takeLatest('LOG_IN_REQUEST',logIn); //login
}
function* watchLogOut(){
    yield takeLatest('LOG_OUT_REQUEST',logOut);
}
function* watchAddPost(){
    yield takeLatest('ADD_POST_REQUEST',addPost);
}

// all : 배열안에 있는 것을 한번에 실행, fork나 call로 함수를 실행
export default function* rootSaga(){
    yield all([
        fork(watchLogIn), //call로 할 수 도 있음
        fork(watchLogOut),
        fork(watchAddPost),
    ]);
}