import React , {useRef, useState, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from "./CreateUser";
// UseMemo는 특정 결과 값을 재사용 할 때 사용하는 반면, useCallback은 특정 함수를 새로 만들지 않고, 재사용하고 싶을 때 사용

const countActiveUsers = (users) => {
    console.log('활성 사용자 수를 세는중...');
    return users.filter((user)=>user.active).length;
};

const App = () => {
    const [inputs, setInputs] = useState({
       username:'',
       email:''
    });
    const {username,email} = inputs;
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);

    const onChange = useCallback((e) =>{
        const {name,value} = e.target;
        setInputs(inputs=>({
           ...inputs,
           [name] : value
        }));
    },[]);

    const nextId = useRef(4);
    const onCreate = useCallback(() => {
        const user = {
            id : nextId.current,
            username,
            email
        };
        setUsers(users=>users.concat(user));
        setInputs({
            username: '',
            email: ''
        });
        nextId.current +=1; // useRef() 를 사용할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본 값이 된다
        console.log(nextId);
    },[username,email]);

    const onRemove = useCallback((id) => {
        // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        setUsers(users.filter((user)=> user.id!==id));
    },[users]);

    const onToggle = useCallback((id) =>{
        setUsers(users=>
            users.map((user) => user.id === id ? {...user, active: !user.active} : user)
        );
    },[]);

    const count = useMemo(() => countActiveUsers(users),[users]);

    return(
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users = {users} onRemove={onRemove} onToggle={onToggle} />
            <div> 활성 사용자 수 : {count} </div>
        </>
    );
}

export default App;
