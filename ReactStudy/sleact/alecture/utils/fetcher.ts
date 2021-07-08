import axios from "axios";


const fetcher = (url:string) => axios.get(url,{
    withCredentials:true,
}).then((response)=>response.data);
// 여기서 return 하는 데이터가 login.ts 에 userSWR로 반환

export default fetcher;