<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加用户</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item required label="姓名" class="wid320">
            <el-input v-model="form.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item required label="性别">
            <el-radio-group v-model="form.source">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item required label="电话" class="wid320">
            <el-input v-model="form.phone" placeholder="电话"></el-input>
          </el-form-item>
          <el-form-item required label="门店" class="wid320">
            <el-select v-model="form.shop" placeholder="门店">
              <el-option v-for="(item, index) in shopList" :key="index" :label="item.text" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="入职时间">
            <el-date-picker
              v-model="form.dateinfo"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item required label="职位" class="wid320">
            <el-select v-model="form.job" placeholder="职位">
              <el-option v-for="(item, index) in jobList" :key="index" :label="item.text" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item required label="备注">
            <el-input type="textarea" v-model="form.remark" rows="5"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">表单提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user_edit',
  data () {
    return {
      jobList: [
        {
          text: '普通员工',
          value: '0'
        },
        {
          text: '区域经理',
          value: '1'
        },
        {
          text: '大区总监',
          value: '2'
        },
        {
          text: '超级管理员',
          value: '3'
        }
      ],
      shopList: [
        {
          text: '南平',
          value: 0
        },
        {
          text: '渝北',
          value: 1
        }
      ],
      options: [
        {
          value: 'guangdong',
          label: '广东省',
          children: [
            {
              value: 'guangzhou',
              label: '广州市',
              children: [
                {
                  value: 'tianhe',
                  label: '天河区'
                },
                {
                  value: 'haizhu',
                  label: '海珠区'
                }
              ]
            },
            {
              value: 'dongguan',
              label: '东莞市',
              children: [
                {
                  value: 'changan',
                  label: '长安镇'
                },
                {
                  value: 'humen',
                  label: '虎门镇'
                }
              ]
            }
          ]
        },
        {
          value: 'hunan',
          label: '湖南省',
          children: [
            {
              value: 'changsha',
              label: '长沙市',
              children: [
                {
                  value: 'yuelu',
                  label: '岳麓区'
                }
              ]
            }
          ]
        }
      ],
      form: {
        name: '',
        linkman: '',
        phone: '',
        job: '',
        houseType: [],
        transType: [],
        area: '',
        title: '',
        rentSize: '',
        rentPrice: '',
        saleSize: '',
        salePrice: '',
        source: '',
        otherSource: '',
        subHouse: ''
      }
    };
  },
  methods: {
    onSubmit () {
      console.log(this.form);
      // this.$message.success('提交成功！');
    }
  },
  mounted () {
    if (this.$route.params.id === '0') {
      console.log('$route.params.id,', this.$route.params.id === '0')
    }
  }
}
</script>
<style lang="less">
.container {
  .custom-input {
    display: inline-block;
    width: 300px;
  }
}
</style>
