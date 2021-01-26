export const initialState ={
    mainPosts : [{
        id : 1,
        User :{
            id:1,
            nickname : '제로초',
        },
        content :'첫 번째 게시글 # 해쉬태크 #익스프레스',
        Images : [
            {src:'https://i.imgur.com/Bf97WeF.png'},
            {src:'https://i.imgur.com/Bf97WeF.png'},
            {src:'https://i.imgur.com/Bf97WeF.png'},
        ],
        Comments:[{
          User:{
              nickname: 'nero',
          },
            comment:'우와 개정판이 나왔군요',
        },{
            User:{
                nickname: 'hero',
            },
            comment: '얼른 사고싶어요',
        }]
    }],
    imagePaths:[],
    postAdded:false,
}

const ADD_POST = 'ADD_POST';

export const addPost = {
    type : ADD_POST,
}

const dummyPost = {
    id:2,
    content : '더미데이터입니다.',
    User :{
        id:1,
        nickname:'제로초',
    },
    Images:[],
    Comments:[],
}

const reducer = (state = initialState,action) =>{
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost,...state.mainPosts], //앞에 추가해야 게시글 쓰면 가장 위에 올라감
                postAdded: true,
            }
        default:
            return state;
    }
}

export default reducer;
