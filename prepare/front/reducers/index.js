import {HYDRATE} from "next-redux-wrapper";
import user from './user';
import post from './post';
import {combineReducers} from "redux";


// (이전상태, 액션 ) => 다음상태
const rootReducer = combineReducers({ //combine reducer가 알아서 initial state를 넣어줌
    index: (state = {},action) => { // 서버사이드 렌더링을 위한 index reducer 추가
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action)
            return {...state, ...action.payload};

        default : // 초기화할때 없으면 undefined가 됨
            return state;
        }
    },
    // user 리듀서랑 ,post 합쳐준것
    user,
    post,
});

export default rootReducer;