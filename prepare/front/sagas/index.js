//function* generator임 generator은 yield를 넣어주면 그 지점에서 멈춤
import {all,fork} from 'redux-saga/effects'; // saga의 이펙드들 ,put은 dispatch라고 생각
import postSaga from "./post";
import userSaga from "./user";

// all : 배열안에 있는 것을 한번에 실행, fork나 call로 함수를 실행
export default function* rootSaga(){
    yield all([
        fork(postSaga), //call로 할 수 도 있음
        fork(userSaga),
    ]);
}