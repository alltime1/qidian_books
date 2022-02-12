import axios from "axios"
let install = axios.create({
  baseURL:"/apis",
  timeout:10000,
  headers:{
    "Cache-Control":"max-age=10000"
  }
})
// install.interceptors.request.use(()=>{

// })

install.interceptors.response.use((e)=>{
  console.log(e);
  return e.data
})
function get (url,params){
  return new Promise((res,rej)=>{
    
    install.get(url,params).then(datas=>{
      res(datas)
    }).catch((err)=>{
      rej(err)
    })
  })
}
function post (url,data){
  return new Promise((res,rej)=>{
    install.post(url,data).then(datas=>{
      res(datas)
    }).catch((err)=>{
      rej(err)
    })
  })
}
export default {post,get};
// getBookshelfRecommend