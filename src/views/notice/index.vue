<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>通知中心</el-breadcrumb-item>
        <el-breadcrumb-item>通知列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
        <el-table-column align="center" prop="title" label="事件" width="180"></el-table-column>
        <el-table-column align="center" prop="content" label="内容"></el-table-column>
        <el-table-column align="center" prop="time" label="时间"></el-table-column>
        <el-table-column align="center" label="操作" width="180">
          <el-button type="text" icon="el-icon-edit" >详情</el-button>
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
        type: ''
      },
      tableData: [
        {
          title: '有人跳楼了',
          content: '在一个月黑风高的夜晚',
          time: '2020-01-01'
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
