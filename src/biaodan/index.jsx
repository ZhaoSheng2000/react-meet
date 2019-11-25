import React from 'react'
import axios from 'axios'
import {
    Form,
    Input,
    Row,
    Col,
    Radio,
    Button,
    message

} from 'antd';


class RegistrationForm extends React.Component {
    state = {
        name: '',
        school: '',
        post: '',//职务
        title: '',//职称
        phone: '',
        email: '',
        attend: '是'

    }

    handleClick =()=>{
        axios.post('/u/addUser', {
            username: this.state.name,
            school: this.state.school,
            work: this.state.post,//职务
            work_name: this.state.title,//职称
            phone: this.state.phone,
            email: this.state.email,
            is_attend: this.state.attend
        })
            .then(function (response) {
                if (response.status===200){
                    message.success('提交成功！');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
};

    render() {

        return (
            <div>
                <Row>
                    <Col span={12} offset={6}>
                        <br/>
                        <h1>参会人员信息填写：</h1>
                        <br/>
                        <Form>
                            <Form.Item>
                                <Input style={{marginBottom: 20}} placeholder="姓名" onChange={(e)=>{this.setState({name:e.target.value})}}/>
                                <Input style={{marginBottom: 20}} placeholder="学校" onChange={(e)=>{this.setState({school:e.target.value})}}/>
                                <Input style={{marginBottom: 20}} placeholder="职务" onChange={(e)=>{this.setState({post:e.target.value})}}/>
                                <Input style={{marginBottom: 20}} placeholder="职称" onChange={(e)=>{this.setState({title:e.target.value})}}/>
                                <Input style={{marginBottom: 20}} placeholder="手机" onChange={(e)=>{this.setState({phone:e.target.value})}}/>
                                <Input style={{marginBottom: 20}} placeholder="邮箱" onChange={(e)=>{this.setState({email:e.target.value})}}/>
                                <Radio.Group value={this.state.attend} onChange={(e)=>{this.setState({attend:e.target.value})}}>
                                    是否参会：
                                    <Radio value={'是'}>是</Radio>
                                    <Radio value={'否'}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Button type={"primary"} block onClick={this.handleClick}>提交</Button>
                            <br/>
                            <br/>
                        </Form>
                    </Col>
                </Row>
            </div>

        );
    }
}

const WrappedRegistrationForm = Form.create({})(RegistrationForm);
export default WrappedRegistrationForm