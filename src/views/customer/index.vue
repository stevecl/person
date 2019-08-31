<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>入驻客户管理</el-breadcrumb-item>
        <el-breadcrumb-item>入驻客户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="search-box">
        <el-input v-model="query.name" placeholder="姓名" class="search-input mr10" clearable></el-input>
        <el-input v-model="query.phone" placeholder="电话" class="search-input mr10" clearable></el-input>
        <el-input v-model="query.entryMan" placeholder="录入人" class="search-input mr10" clearable></el-input>
        <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
      </div>
      <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
        <el-table-column align="center" prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column align="center" prop="phone" label="电话" width="180"></el-table-column>
        <el-table-column align="center" prop="entryTime" label="录入时间"></el-table-column>
        <el-table-column align="center" prop="entryMan" label="录入人"></el-table-column>
        <el-table-column align="center" prop="startTime" label="合同开始时间"></el-table-column>
        <el-table-column align="center" prop="endTime" label="合同到期时间"></el-table-column>
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
        phone: '',
        entryMan: ''
      },
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
          name: '小弟',
          phone: '110',
          entryTime: '2018-04-09',
          entryMan: '张三',
          startTime: '2019-01-01',
          endTime: '2020-01-01'
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
