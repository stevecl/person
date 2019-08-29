<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="search-box">
        <el-input v-model="query.name" placeholder="姓名" class="search-input mr10" clearable></el-input>
        <el-select v-model="query.gender" placeholder="性别" class="search-select gender-select mr10">
          <el-option key="1" label="男" value="1"></el-option>
          <el-option key="2" label="女" value="0"></el-option>
        </el-select>
        <el-select v-model="query.job" placeholder="职位" class="search-select mr10">
          <el-option v-for="(item, index) in jobList" :key="index" :label="item.text" :value="item.value"></el-option>
        </el-select>
        <el-select v-model="query.shop" placeholder="门店" class="search-select mr10">
          <el-option v-for="(item, index) in shopList" :key="index" :label="item.text" :value="item.value"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        <el-button type="primary" icon="el-icon-search" @click="search">新增用户</el-button>
      </div>
      <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column align="center" type="index" label="" width="50"></el-table-column>
        <el-table-column align="center" prop="number" label="工号" width="180"></el-table-column>
        <el-table-column align="center" prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column align="center" prop="phone" label="电话"></el-table-column>
        <el-table-column align="center" prop="shop" label="门店"></el-table-column>
        <el-table-column align="center" prop="job" label="职位"></el-table-column>
        <el-table-column align="center" prop="date" label="入职时间"></el-table-column>
        <el-table-column align="center" prop="status" label="状态"></el-table-column>
        <el-table-column align="center" label="操作" width="180">
          <el-button type="text" icon="el-icon-edit" >编辑</el-button>
          <el-button type="text" icon="el-icon-delete" class="red">删除</el-button>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        layout="prev, pager, next"
        :total="1000"
        @current-change="selectPage">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {
      query: {
        name: '',
        gender: '',
        job: '',
        shop: ''
      },
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
      tableData: [
        {
          number: 1,
          name: '王小虎',
          phone: 18883288160,
          shop: '南坪总店',
          job: '普通员工',
          gender: '男',
          date: '2016-05-02',
          status: '在职'
        },
        {
          number: 1,
          name: '王小虎',
          phone: 18883288160,
          shop: '南坪总店',
          job: '普通员工',
          gender: '男',
          date: '2016-05-02',
          status: '在职'
        },
        {
          number: 1,
          name: '王小虎',
          phone: 18883288160,
          shop: '南坪总店',
          job: '普通员工',
          gender: '男',
          date: '2016-05-02',
          status: '在职'
        }
      ]
    }
  },
  methods: {
    search () {
      console.log(this.query)
    },
    selectPage (page) {
      console.log(page)
    }
  }
}
</script>
<style lang="less" scoped>
.red{
  color: red;
}
.mr10{
  margin-right: 10px;
}
.search-box{
  margin-bottom: 10px;
  .search-input{
    width: 100px;
    display: inline-block;
  }
  .search-select {
    width: 100px;
    &.gender-select{
      width: 80px;
    }
  }
  .pagination{
    margin-top: 20px;
  }
}
</style>
