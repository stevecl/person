<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-lx-people',
          index: '1',
          title: 'crm用户管理',
          subs: [
            {
              index: '/user',
              title: '用户列表'
            },
            {
              index: '/user/edit/0',
              title: '新增用户'
            }
          ]
        },
        {
          icon: 'el-icon-lx-cascades',
          index: '2',
          title: '房源管理',
          subs: [
            {
              index: '/house',
              title: '意向房源'
            },
            {
              index: '/house/house_add',
              title: '录入房源'
            }
          ]
        },
        {
          icon: 'el-icon-lx-cascades',
          index: '3',
          title: '入驻客户管理',
          subs: [
            {
              index: '/customer',
              title: '入驻客户列表'
            },
            {
              index: '/customer/detail',
              title: '入驻客户详情'
            }
          ]
        },
        {
          icon: 'el-icon-lx-cascades',
          index: '4',
          title: 'crm公告管理',
          subs: [
            {
              index: '/announcement',
              title: '公告列表'
            },
            {
              index: '/announcement/detail',
              title: '公告详情'
            }
          ]
        },
        {
          icon: 'el-icon-lx-cascades',
          index: '5',
          title: '通知中心',
          subs: [
            {
              index: '/notice',
              title: '通知列表'
            },
            {
              index: '/notice/detail',
              title: '通知详情'
            }
          ]
        },
        {
          icon: 'el-icon-lx-emoji',
          index: 'crawlerData',
          title: '爬虫数据'
        },
        {
          icon: 'el-icon-lx-emoji',
          index: 'dataInfo',
          title: '数据统计'
        },
        {
          icon: 'el-icon-lx-emoji',
          index: 'banner',
          title: 'banner管理'
        },
        {
          icon: 'el-icon-lx-emoji',
          index: 'icon',
          title: '自定义图标'
        },
        {
          icon: 'el-icon-pie-chart',
          index: 'charts',
          title: 'schart图表'
        },
        {
          icon: 'el-icon-lx-warn',
          index: '7',
          title: '错误处理',
          subs: [
            {
              index: 'permission',
              title: '权限测试'
            },
            {
              index: '404',
              title: '404页面'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  created () {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    Bus.$on('collapse', msg => {
      this.collapse = msg
    })
  }
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu--collapse{
  width: 50px;
}
.sidebar > ul {
  height: 100%;
}

</style>
