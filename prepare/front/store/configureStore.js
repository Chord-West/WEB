// Redux 담당
// Redux를 써야 하는 이유
// 중앙 데이터 저장소 역할 , 컴포넌트가 필요로 할때 부분적으로 지원 ( React에서는 Context API 가 담당 )

import {createWrapper} from 'next-redux-wrapper';
import {createStore} from "redux";

const configureStore = () =>{
    const store = createStore(reducer);
    return store;
};

// 기본적인 셋팅
const wrapper = createWrapper(configureStore, { debug : process.env.NODE_ENV === 'development',});

export default wrapper;