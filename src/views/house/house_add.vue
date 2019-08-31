<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>房源管理</el-breadcrumb-item>
        <el-breadcrumb-item>录入房源</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item required label="项目名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item required label="联系人">
            <el-input v-model="form.linkman"></el-input>
          </el-form-item>
          <el-form-item required label="电话">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="岗位">
            <el-input v-model="form.job"></el-input>
          </el-form-item>
          <el-form-item required label="厂房/仓库">
            <el-checkbox-group v-model="form.houseType">
              <el-checkbox label="厂房" name="type"></el-checkbox>
              <el-checkbox label="仓库" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item required label="出租/出售">
            <el-checkbox-group v-model="form.transType">
              <el-checkbox label="出租" name="type"></el-checkbox>
              <el-checkbox label="出售" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item required label="区域">
            <el-cascader :options="options" v-model="form.area"></el-cascader>
          </el-form-item>
          <el-form-item required label="标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item required label="可出租面积" class="custom-input">
            <el-input v-model="form.rentSize"></el-input>
          </el-form-item>
          <el-form-item required label="出租价格" class="custom-input">
            <el-input v-model="form.rentPrice"></el-input>
          </el-form-item>
          <el-form-item required label="可出售面积" class="custom-input">
            <el-input v-model="form.saleSize"></el-input>
          </el-form-item>
          <el-form-item required label="出售价格" class="custom-input">
            <el-input v-model="form.salePrice"></el-input>
          </el-form-item>
          <el-form-item required label="房源来源">
            <el-radio-group v-model="form.source">
              <el-radio label="58同城"></el-radio>
              <el-radio label="内部推荐"></el-radio>
              <el-radio label="线上平台"></el-radio>
              <el-radio label="其他"></el-radio>
            </el-radio-group>
            <el-input v-model="form.otherSource" style="width: 100px;margin-left: 20px;"></el-input>
          </el-form-item>
          <el-form-item required label="存在子房源">
            <el-radio-group v-model="form.subHouse">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
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
  name: 'house_add',
  data () {
    return {
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
  }
};
</script>
<style lang="less">
.container {
  .custom-input {
    display: inline-block;
    width: 300px;
  }
}
</style>
