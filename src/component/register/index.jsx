import React,{Component} from 'react';

import {NavBar,InputItem,WingBlank,List,WhiteSpace,Radio,Button} from 'antd-mobile';

import {reqRegister} from '../../api';  //默认读取index

import Logo from '../logo';
const Item = List.Item;



class Register extends Component{
    state = {
        username:'',
        password:'',
        rePassword:'',
        type:'laoban'
    };


    //加中括号是变量，，不加会默认是属性，，不加则name一直不变，每一个val变化前面都是name
    handleChange = (name,val) => {
      this.setState({
          [name]:val
      })
    };

    register = async() => {
        //获取属性
        const {username,password,rePassword} = this.state;
        console.log(username,password,rePassword);

        //判断输入的两个密码是否一致
        if(password === rePassword){
            //发送ajax请求
            const data = await reqRegister({username,password});
            console.log(data);
        }else{
            alert ('两次输入的密码不一致')
        }
    };




    //点击时跳转到的登录页面,编程式导航
    goLogin = () => {
        this.props.history.replace('./login')    //替换浏览历史记录  替换路径
    };

    render(){
        const type = this.state;
        return (
            <div>
                <NavBar>硅 谷 直 聘</NavBar>
                <Logo />
                <WingBlank>
                    <form>
                        <List>
                            <WhiteSpace />
                            <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username',val)}>用户名：</InputItem>
                            <WhiteSpace />
                            <InputItem placeholder="请输入密码" onChange= {val => this.handleChange('password',val)} type="password">
                                密码：
                            </InputItem>
                            <WhiteSpace />
                            <InputItem placeholder="请输入确认密码" onChange= {val => this.handleChange('rePassword',val)} type="password">
                                确认密码：
                            </InputItem>
                            <WhiteSpace />
                            <Item>用户类型：&nbsp;&nbsp;
                                {/* checked 是选中属性 当点击时触发handleChange，然后state中type数值改变，此时执行checked后面的，三个等号表示判断，true则执行选中，false不执行*/}
                                <Radio
                                    checked={type === 'dashen'}
                                    onClick={() => this.handleChange('type','dashen')}
                                >大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Radio
                                    checked={type === 'laoban'}
                                    onClick={() => this.handleChange('type','laoban')}
                                >老板</Radio>
                            </Item>
                            <WhiteSpace />
                            <Button type="primary"  onClick={this.register}>注册</Button>
                            <WhiteSpace />
                            <Button onClick={this.goLogin}>已有注册账户</Button>
                        </List>
                    </form>



                </WingBlank>


            </div>




        )
    }
}
export default Register;