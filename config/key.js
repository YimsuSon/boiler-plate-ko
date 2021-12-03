if(process.NODE_ENV === 'production'){
    // 배포 모드
    module.exports = require('./prod.js');
} else {
    // dev 모드
    module.exports = require('./dev.js');
}