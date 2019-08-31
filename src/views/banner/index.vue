<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>网站banner管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="search-box">
        提示：平台首页只会展示前6张banner图
        <el-button type="primary" icon="el-icon-search" @click="addBanner" class="fr mgb20">新增</el-button>
      </div>
      <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
        <el-table-column align="center" prop="title" label="标题" width="180"></el-table-column>
        <el-table-column align="center" label="图片" width="180">
          <template slot-scope="scope">
            <!-- {{scope.row.imageUrl}} -->
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.imageUrl"
              :preview-src-list="[scope.row.imageUrl]"
              :fit="fit">
            </el-image>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="link" label="链接"></el-table-column>
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
    <el-dialog
      width="600px"
      v-dialogDrag
      center
      title="新增banner"
      :visible.sync="dialogShow"
      :close-on-click-modal="false">
      <div class="form-box" style="height: 400px;">
        <el-form ref="form" :model="bannerObj" label-width="60px">
          <el-form-item required label="标题" class="wid320">
            <el-input v-model="bannerObj.title"></el-input>
          </el-form-item>
          <el-form-item required label="链接" class="wid320">
            <el-input v-model="bannerObj.link"></el-input>
          </el-form-item>
          <el-form-item required label="图片" class="wid320">
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogShow = false">取 消</el-button>
        <el-button type="primary" @click="saveBanner">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'banner',
  data () {
    return {
      dialogShow: false,
      tableData: [
        {
          title: '中秋活动',
          imageUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638429004,1717840478&fm=26&gp=0.jpg',
          link: 'www.baidu.com'
        }
      ],
      bannerObj: {
        title: '',
        link: '',
        imageUrl: ''
      }
    }
  },
  methods: {
    addBanner () {
      this.dialogShow = true;
      console.log(this.query)
    },
    saveBanner () {
      console.log('1', this.bannerObj)
    },
    selectPage (page) {
      console.log(page)
    }
  },
  filters: {
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
