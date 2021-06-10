import React from 'react';
import loadable from "@loadable/component";
import {Switch,Route,Redirect} from "react-router";


const LogIn = loadable(()=> import('@pages/Login')); // 코드 스플릿팅을 위한 설정
const SignUp = loadable(()=> import('@pages/SignUp'));
const App = () => {
    return (
        <Switch>
            <Redirect exact path="/" to="/login"/>
            <Route path="/login" component={LogIn}/>
            <Route path="/signup" component={SignUp}/>
        </Switch>
    );
};

export default App;