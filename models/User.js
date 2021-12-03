const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type: String, 
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, // 스페이스를 제거해주는 역할
        unique:1
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{
        type: Number,
        default: 0 // 관리자 
    },
    image: String,
    token: {
        type: String // 유효성 관리 
    },
    tokenExp: {
        type: Number // 토큰 유효기간 
    }
})

const User = mongoose.model('User',userSchema) // 스키마를 모델로 감싸준다.

module.exports = { User } // 다른곳에서도 사용할수있게 만든다.