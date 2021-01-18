import React,{useState,useCallback} from 'react'
import PropTypes from 'prop-types';
import {Card, Comment, Popover, Button, Avatar,List} from "antd";
import {HeartOutlined,RetweetOutlined,MessageOutlined,EllipsisOutlined,HeartTwoTone} from "@ant-design/icons";
import {useSelector} from "react-redux";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";

const PostCard = ({post}) =>{
    const id = useSelector((state)=>state.user.me?.id);// Optional Chaining연산자 me.id 가 있으면 그 값이고 , 없으면 undefined로 바꿔줌
    const [liked,setLiked] = useState(false);
    const [commentFormOpened,setCommentFormOpened] = useState(false);
    const onToggleLike = useCallback(()=>{
        setLiked((prev)=>!prev); // true인걸 false로 false인걸 true로 바꿔줌
    },[]);
    const onToggleComment = useCallback(()=>{
        setCommentFormOpened((prev)=>!prev);
    },[]);
    return(
      <div style={{marginBottom : 20}}>
          {/*배열안에 js를 넣어줄때는 key를 꼭 넣어줘야함*/}
          <Card
              cover={post.Images[0] && <PostImages images={post.Images}/>}
              actions={[
                  <RetweetOutlined key="retweet"/>,
                  liked
                      ?<HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike}/>
                      :<HeartOutlined key="heart" onClick={onToggleLike}/>,
                  <MessageOutlined key="commnet" onClick={onToggleComment}/>,
                  <Popover key="more" content={(
                      <Button.Group>
                          {id && post.User.id === id ? (
                              <>
                                <Button>수정</Button>
                                <Button type="danger">삭제</Button>
                              </>
                          ) :  <Button>신고</Button>}
                      </Button.Group>
                  )}>
                      <EllipsisOutlined/>
                  </Popover>,
              ]}
          >
              <Card.Meta
                  avatar = {<Avatar>{post.User.nickname[0]}</Avatar>}
                  title = {post.User.nickname}
                  description={post.content}
              />
          </Card>
          {commentFormOpened&&(
              <div>
                  <CommentForm post={post}/>
                  <List
                      header={`${post.Comments.length}개의 댓글`}
                      itemLayout="horizontal"
                      dataSource={post.Comments}
                      renderItem={(item)=>(
                          <li>
                              <Comment
                                  author={item.User.nickname}
                                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                  content={item.content}
                              />
                          </li>
                      )}
                  />
              </div>
          )}
          {/*<CommentForm/>*/}
          {/*<Comments/>*/}
      </div>
    );
};

PostCard.propTypes = {
    post : PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.object,
        content : PropTypes.string,
        createdAt: PropTypes.object,
        Comments : PropTypes.arrayOf(PropTypes.object),
        Images : PropTypes.arrayOf(PropTypes.object),
    }).isRequired,

}

export default PostCard;