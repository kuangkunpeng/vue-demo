<style scoped>

.form {
    width: 50%;
}

</style>

<template>

<div class="form">
    <i-form ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="姓名" prop="name">
            <i-input v-model="formValidate.name" placeholder="请输入姓名"></i-input>
        </Form-item>
        <Form-item label="邮箱" prop="mail">
            <i-input v-model="formValidate.mail" placeholder="请输入邮箱"></i-input>
        </Form-item>
        <Form-item label="城市" prop="city">
            <i-select :value.sync="formValidate.city" placeholder="请选择所在地">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
            </i-select>
        </Form-item>
        <Form-item label="选择日期">
            <Row>
                <i-col span="11">
                    <Form-item prop="date">
                        <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
                    </Form-item>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>
                <i-col span="11">
                    <Form-item prop="time">
                        <Time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></Time-picker>
                    </Form-item>
                </i-col>
            </Row>
        </Form-item>
        <Form-item label="性别" prop="gender">
            <Radio-group v-model="formValidate.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="爱好" prop="interest">
            <Checkbox-group v-model="formValidate.interest">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="介绍" prop="desc">
            <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click.native="handleSubmit('formValidate')">提交</i-button>
            <i-button type="ghost" @click.native="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
        </Form-item>
    </i-form>
<Icon type="mouse" color='#ff0000' />
<i-button type='primary' icon='mouse' size='large' :loading='true'  style='color:#000000'>aaaa</i-button>

<i-input :number='true' >
 <span :click='handleReset' slot="prepend">http://</span>
</i-input>
<card>
    <p slot='title'>afa</p>
</card>
 <Alert banner closable type="warning">通知：通知内容。。。</Alert>
   <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="settings"></Icon>
            综合设置
        </MenuItem>
    </Menu>
    <br>
    <p>切换主题</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>
     <Button type="ghost" shape="circle" icon="ios-search"></Button>
</div>

</template>

<script>

export default {
    data() {
            return {
                theme1: 'light',
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [{
                        required: true,
                        message: '姓名不能为空',
                        trigger: 'blur'
                    }],
                    mail: [{
                        required: true,
                        message: '邮箱不能为空',
                        trigger: 'blur'
                    }, {
                        type: 'email',
                        message: '邮箱格式不正确',
                        trigger: 'blur'
                    }],
                    city: [{
                        required: true,
                        message: '请选择城市',
                        trigger: 'change'
                    }],
                    gender: [{
                        required: true,
                        message: '请选择性别',
                        trigger: 'change'
                    }],
                    interest: [{
                        required: true,
                        type: 'array',
                        min: 1,
                        message: '至少选择一个爱好',
                        trigger: 'change'
                    }, {
                        type: 'array',
                        max: 2,
                        message: '最多选择两个爱好',
                        trigger: 'change'
                    }],
                    date: [{
                        required: true,
                        type: 'date',
                        message: '请选择日期',
                        trigger: 'change'
                    }],
                    time: [{
                        required: true,
                        type: 'date',
                        message: '请选择时间',
                        trigger: 'change'
                    }],
                    desc: [{
                        required: true,
                        message: '请输入个人介绍',
                        trigger: 'blur'
                    }, {
                        type: 'string',
                        min: 20,
                        message: '介绍不能少于20字',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                    this.$Message.success('这是一条成功的提示');
                },
                handleReset(name) {
                    this.$Message.warning('这是一条警告的提示');
                }
        }
}

</script>
