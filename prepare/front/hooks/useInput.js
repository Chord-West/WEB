// 공통적인 입력을 받는 부분을 처리 ( 커스텀 훅 )
// LoginForm 에서 사용
import {useState,useCallback} from 'react';

export default (initialValue = null)=>{
    const [value,setValue] = useState(initialValue);
    const handler = useCallback((e)=>{
        setValue(e.target.value);
    },[]);
    return [value,handler,setValue];
}

