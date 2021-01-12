import React from 'react';
import AppLayout from "../components/AppLayout";
import {useSelector} from "react-redux";


const Home = () =>{
    const {isLoggdIn} = useSelector((state)=>state.user);
    const {mainPosts} = useSelector((state)=>state.post);
    return(
        <AppLayout>
            {/* 로그인됐을때만 PostForm이 보인다.*/}
            {isLoggdIn&&<PostForm/>}
            {mainPosts.map((post)=><PostCard key={post.id} post={post}/>)}
        </AppLayout>
    );
}

export default Home;