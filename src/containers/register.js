import {connect} from 'react-redux'
//引入注册UI组件
import Register from '../components/register'
//actions
import {register} from '../redux/actions'

export default  connect(
    state => ({user: state.user}),
    {register}
)(Register)