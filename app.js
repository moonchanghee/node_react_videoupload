var express = require('express');
var app = express();
var ffmpeg = require("fluent-ffmpeg")
const {Video} = require("./server/routes/models/Video") 
// var usersRouter = require('./server/routes/user');
var UploadPage = require('./server/routes/uploadpage')
// var indexRouter = require('./server/routes/index');
// const users = require('./server/routes/user')

const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://hee:2852@hee.pcfo2.mongodb.net/<dbname>?retryWrites=true&w=majority' , 
{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
.then(() => console.log("몽고디비 성공"))
.catch(err => console.log(err))

var cors = require('cors');
app.use(cors());

// app.use('/users' , users)

const bodyparser = require("body-parser")
// app.use(indexRouter);
app.use('/uploadpage',UploadPage);
app.use(bodyparser.json());




app.post('/thumbnail' , (req,res, next) => {

    console.log("썸네일 포스트 라우터")
    let fileDuration ="";
    let filepath = ""
    console.log(req.body.url)
    ffmpeg.ffprobe(req.body.url , (err , metadata) =>{
    console.log("metadata :" + metadata.format.duration) //해당 비디오 정보
    fileDuration = metadata.format.duration //동영상 길이 대입
    })
    
    ffmpeg(req.body.url)
    .on('filenames' , function(fileName) {
    console.log("filenames" + fileName)
    // filepath = "public/thumbnails" + fileName[0];
    filepath = fileName[0];
    })
    .on("end" , function() { 
    console.log("Screenshots taken");
    return res.json({
        success:true, fileName:filepath, fileDuration:fileDuration})
    })
    .screenshots({
        count :3,
        folder: 'public/thumbnails',
        size: '320x240',
        //%b = input basename
        filename : 'thumbnail-%b.png'
    })
})

app.post('/uploadVideo', (req, res , next) => {
    console.log("업로드")
    console.log(req.body)
        const video = new Video({
            title: req.body.title,
            description:req.body.description,
            filePath:req.body.filePath ,
            fileName:req.body.filename,   
            thumbName : req.body.thumbName
        })
    
        video.save((err, video) => {
            if(err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true 
            })
        })
    
    });

    app.get("/getVideos", (req, res ,next) => {

        Video.find()
        .exec((err, video) => {
            if(err) return res.status(400).send(err);
            console.log(video)
            res.status(200).json({ success: true, video })
        })
    });



    app.post("/getVideoDetail", (req, res) => {
        console.log("getVideoDetail")
            Video.findOne({ "_id" : req.body.videoId })
            .populate('writer')
            .exec((err, video) => {
                if(err) return res.status(400).send(err);
                res.status(200).json({ success: true, video })
            })
        });
        



        app.post("/getVideoDetail", (req, res) => {
            console.log("getVideoDetail")
                Video.findOne({ "_id" : req.body.videoId })
                .populate('writer')
                .exec((err, video) => {
                    if(err) return res.status(400).send(err);
                    res.status(200).json({ success: true, video })
                })
            });


            










            const port = process.env.PORT || 3002;
// portnumber를 3002로 지정
// const port = 3002;

// 3002번 포트넘버를 가진 서버 생성
app.listen(port, () => console.log(`listening on port ${port}!`));