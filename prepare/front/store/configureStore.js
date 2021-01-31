// Redux 담당
// Redux를 써야 하는 이유
// 중앙 데이터 저장소 역할 , 컴포넌트가 필요로 할때 부분적으로 지원 ( React에서는 Context API 가 담당 )

import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const loggerMiddleware = ({dispatch,getstate}) => (next) => (action) =>{
    console.log(action);
    return next(action);
};

const configureStore = () =>{
    const sagaMiddleware = createSagaMiddleware();
    const middlewares =[sagaMiddleware,loggerMiddleware];
    const enhancer = process.env.NODE_ENV ==='production'
    ? compose(applyMiddleware(...middlewares)) // 배포용 미들웨어
        : composeWithDevTools(applyMiddleware(...middlewares)) //개발용 미들웨어 (히스토리가 쌓임 => 보안에 취약할 수 있기 때문에 개발용에만 장착)
    const store = createStore(reducer,enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

// 기본적인 셋팅
const wrapper = createWrapper(configureStore, { debug : process.env.NODE_ENV === 'development',});

export default wrapper;