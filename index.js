const ReadLevelDB = require('./readLevelDB')
const keccak256 = require("@ethersproject/keccak256")
const ethUtil = require('ethereumjs-util')

const db=new  ReadLevelDB("/Users/wangxiaoke/git/node/geth/chaindata")

console.log(keccak256.keccak256(ethUtil.toBuffer("0x0000000000000000000000000000000000001007")))

db.getPreimage("0xe86b77aa816af8cbf617b865e9f5e76188656514ae15037481ccae9da9f76460",function(err,val){
        console.log(val)
})



        
