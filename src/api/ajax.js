
/*
 封装axios的ajax模块
 返回值是promise对象
 */

import axios from 'axios'

export default function ajax(url,data,type = 'GET'){
    let queryString = '';
//    判断data是否存在
    if(data){
        Object.keys(data).forEach(key => {
            //Object.keys  将传入的对象中可枚举的属性保存在一个数组中返回
            //传入data 得到数组，然后遍历 得到属性
            //value 是获取每一个属性值
            const value = data[key];
            queryString += key + '=' + value + '&';
            //上述拼接字符串，将属性名和属性值拼接，每一个属性之间用&连接
        })
        // 将最后多余的&去除
        queryString = queryString.substring(0,queryString.length-1)  //不能直接写-1
        console.log(queryString);
    }
    if(type.toUpperCase() === 'GET'){
        //用户使用GET请求
        // toUpperCase  转换为大写
        //如果用户通过data传参，需要将data中的数据以字符串的方式添加在url后面
        url += '?' +  queryString;
        return axios.get('GET');
    }else{
        //用户发送的是post请求
        return axios.post(url,queryString,{
            Header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }

}
