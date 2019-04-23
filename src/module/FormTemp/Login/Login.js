import React, { Component } from 'react'
import {Card,Form,Button,Input,Icon,message} from "antd";
const FormItem=Form.Item;
 class Login extends Component {
   handleSubmit=(e)=>{
     e.preventDefault();
     const userInfo=this.props.form.getFieldsValue();
     this.props.form.validateFields((err, values)=>{
       if(!err){
         message.success(`${userInfo.userName},恭喜您，你登陆成功，点给钱密码为:${userInfo.passWord}`)
       }
     })
   }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录表单">
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName',{
                rules:[{required:true,message:"请输入用户名"}]
              })(<Input prefix={<Icon type="user"/>} />)
              }
            </FormItem>
            <FormItem>
              {getFieldDecorator('passWord',{
                rules:[{required:true,message:"请输入密码"}]
              })(<Input prefix={<Icon type="lock"/>} />)
              }
            </FormItem>
            <FormItem>
              <Button htmlType="submit">登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(Login)