import React,{Component} from 'react';
import {NavBar,WingBlank,WhiteSpace,InputItem,List} from 'antd-mobile';
import Logo from '../logo';
// import Register from '../register';

class Login extends Component{



    render(){
        return (
            <div>
                <NavBar>硅 谷 直 聘</NavBar>
                <Logo />
                <WingBlank>
                    <form>
                        <List>
                            <WhiteSpace />
                            <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username',val)}>用户名：</InputItem>
                            <InputItem placeholder="请输入密码" onChange={val => this.handleChange('username',val)}>密码：</InputItem>
                        </List>
                    </form>
                </WingBlank>
            </div>
        )
    }
}
export default Login;