import React,{useEffect , useState} from 'react'
import {Row , Col, List, Avator , Content} from 'antd'
import SideVideo from './SideVideo'
import Axios from 'axios';
import Header from '../headerFrom/headerFrom'


const VideoDetailPage = (props) => {

    const videoId = props.match.params.videoId  
    const variable = {videoId: videoId}
    const [CommentLists, setCommentLists] = useState([])
    const [Video, setVideo] = useState([])
    

useEffect(() => {
    Axios.post('/getVideoDetail' , variable)
    .then(res => {
        if(res.data.success){
            console.log("비디오 가져오기 성공")
            console.log(res.data.video)
            setVideo(res.data.video)
            
        }else{
            console.log("비디오 가져오기 실패")
        }
    })
}, [])


return(
<>
{console.log(Video)}

<Header/>

<Row gutter={[16,16]}>
<Col lg ={18} xs={24}>
{/* <div style={{width : '50%' , padding: '10%'}}>     */}
<video src={`../${Video.fileName}`} style={{width : '90%' , height:'30%' ,marginTop:"1%" , marginLeft:"5%"}}controls></video>  
<List.Item
actions>
<List.Item.Meta
avatar
title =  {"타이틀 : " + Video.title}
description = {"내용 : " + Video.description}/>
</List.Item>
{/* </div> */}
</Col>

<Col lg ={6} xs={24}>
<SideVideo name = {Video.fileName}  />
</Col>
</Row>
</>

)}

export default VideoDetailPage