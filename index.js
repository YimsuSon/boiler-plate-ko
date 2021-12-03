const express = require('express') // express 모듈가져오기
const app = express() // express 앱 만들기
const port = 5000

const bodyParser = require('body-parser');
const {User} = require("./models/User");

const mongoose = require("mongoose")

//application/x-www-form-urlcode 형태 분석
app.use(bodyParser.urlencoded({extended: true}));
//application/json 형태 분석
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://YoungHo0:abcd1234@Cluster0.1yy0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false 
}).then(() => console.log('MongoDB connected ....'))
.catch(err => console.log(err)) 








app.get('/', (req, res) => {
  res.send('Hello World! - 안녕하세요') // 응답 
})

app.post('/register',(req,res) => {
    // 회원 가입 시 필요한 정보들을 client에서 가져오면 
    // 그것들을 데이터 베이스에 넣어준다.
        const user = new User
        user.save((err,userInfo) => {
            if(err) return res.json({ success: false, err})
            
            return res.status(200).json({
                success:true 
            })
        })
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) // 로그
})