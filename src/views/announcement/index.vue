<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>crm公告管理</el-breadcrumb-item>
        <el-breadcrumb-item>公告列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="search-box">
				<el-select v-model="query.type" placeholder="类型" class="search-select gender-select mr10">
          <el-option key="0" label="全部" value="0"></el-option>
          <el-option key="1" label="普通" value="1"></el-option>
          <el-option key="2" label="警告" value="2"></el-option>
          <el-option key="3" label="喜报" value="3"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
      </div>
      <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
        <el-table-column align="center" prop="title" label="标题" width="180"></el-table-column>
        <el-table-column align="center" prop="content" label="内容" width="180"></el-table-column>
        <el-table-column align="center" prop="type" label="类型"></el-table-column>
        <el-table-column align="center" prop="createMan" label="创建人"></el-table-column>
        <el-table-column align="center" prop="startTime" label="生成时间"></el-table-column>
        <el-table-column align="center" prop="endTime" label="失效时间"></el-table-column>
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
        type: ''
      },
      tableData: [
        {
          title: '有人跳楼了',
          content: '在一个月黑风高的夜晚',
          type: '普通',
          createMan: '张三',
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
