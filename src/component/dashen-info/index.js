import React ,{Component} from 'react';
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile';
import HeaderSelector from '../header-selector';

class DasheInfo extends Component {
    render(){
        return(
            <div>
                <NavBar>大神完善信息</NavBar>
                <HeaderSelector/>
                <InputItem>求岗职位：</InputItem>
                <TextareaItem title="个人介绍" rows={3} />
                <Button type="primary">保 存</Button>
            </div>
        )
    }
}

export default DasheInfo;
