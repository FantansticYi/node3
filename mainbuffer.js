/*buf = Buffer.alloc(256);
len = buf.write("www.runoob.com");

console.log("写入字节数：" + len);
*/

/*
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

//输出：{"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) =>{
   return value && value.type === 'Buffer' ?
       Buffer.from(value.data) :
       value;
});

//输出：<Buffer 01, 02, 03, 04, 05>
console.log(copy);
*/

/*
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3内容: " + buffer3.toString());
*/

//缓冲区比较
/*var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0){
    console.log(buffer1 + "在" + buffer2 + "之前");
}else if (result == 0){
   console.log(buffer1 + "与" + buffer2 + "相同");
} else{
    console.log(buffer1 + "在" + buffer2 + "之后");
}
*/


/*
//拷贝缓冲区
//buf.copy（targetBuffer[,targetStart[,sourceStart[,sourceEnd]]]）
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

//将buf2插入到buf1指定位置

buf2.copy(buf1, 2);

console.log(buf1.toString());
*/


//缓冲区裁剪
//buf.slice([start[,end]])

/*var buffer1 = Buffer.from('runoob');
var buffer2 = buffer1.slice(0, 2);
console.log("buffer2 content: " + buffer2.toString());
*/


//缓存区长度
//buf.length;

var buffer = Buffer.from('www.runoob.com');
console.log("buffer length: " + buffer.length);




