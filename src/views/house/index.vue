<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>房源管理</el-breadcrumb-item>
        <el-breadcrumb-item>意向房源</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="search-box">
        <el-input v-model="query.title" placeholder="标题" class="search-input mr10" clearable></el-input>
        <el-select v-model="query.houseType" placeholder="类型" class="search-select gender-select mr10">
          <el-option key="1" label="厂房" value="1"></el-option>
          <el-option key="2" label="仓库" value="2"></el-option>
          <el-option key="0" label="全部" value="0"></el-option>
        </el-select>
        <el-select v-model="query.transType" placeholder="类别" class="search-select gender-select mr10">
          <el-option key="1" label="出租" value="1"></el-option>
          <el-option key="2" label="出售" value="2"></el-option>
          <el-option key="0" label="全部" value="0"></el-option>
        </el-select>
				<el-input v-model="query.linkman" placeholder="联系人" class="search-input mr10" clearable></el-input>
        <el-select v-model="query.area" placeholder="区域" class="search-select mr10">
          <el-option v-for="(item, index) in shopList" :key="index" :label="item.text" :value="item.value"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
      </div>
      <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
        <el-table-column align="center" prop="title" label="标题" width="180"></el-table-column>
        <el-table-column align="center" prop="houseType" label="类型" width="180"></el-table-column>
        <el-table-column align="center" prop="transType" label="类别"></el-table-column>
        <el-table-column align="center" prop="linkman" label="联系人"></el-table-column>
        <el-table-column align="center" prop="phone" label="电话"></el-table-column>
        <el-table-column align="center" prop="area" label="区域"></el-table-column>
        <el-table-column align="center" prop="size" label="面积"></el-table-column>
        <el-table-column align="center" prop="price" label="价格"></el-table-column>
        <el-table-column align="center" prop="updateTime" label="更新时间"></el-table-column>
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
        title: '',
        houseType: '',
        transType: '',
        linkman: '',
        area: ''
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
          title: '南岸区南坪仓库出租',
          houseType: '厂房',
          transType: '出租',
          linkman: '杜先生',
          phone: 18883288160,
          area: '南坪',
          size: 100,
          price: 18,
          updateTime: '2018-08-31'
        },
        {
          title: '南岸区南坪仓库出租',
          houseType: '厂房',
          transType: '出租',
          linkman: '杜先生',
          phone: 18883288160,
          area: '南坪',
          size: 100,
          price: 18,
          updateTime: '2018-08-31'
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
