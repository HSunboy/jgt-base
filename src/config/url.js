let url;

if(ENV==="pro") {
    url={
        member:"https://uch5.hseb.com.cn",
        dimension:"https://uch5.hseb.com.cn",
        imgurl:"https://uch5.hseb.com.cn/upload/"
    };
}else if(ENV==="uat"){
    url={
        member:"http://120.27.167.10:8090",
        dimension:"http://120.27.167.10:8090",
        imgurl:"http://120.27.167.10:8099/upload/"
    };
}else{
    url={
        member:"http://192.168.49.223:8090",
        dimension:"http://192.168.49.223:8090",
        imgurl:"http://192.168.49.224:8099/upload/"
    };
}



module.exports=url;
