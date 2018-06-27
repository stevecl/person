<template>
  <div class="main">
    <img src="../assets/images/logo.png" alt="">
    <a @click="all">maina</a>
    <a href="https://cn.vuejs.org/">vue</a>
  </div>
</template>
<script>
export default {
  mounted() {},
  methods: {
    all() {
      this.$router.push({ path: "/list" });
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 300px;
  text-align: center;
  margin-top: 100px;
  font-size: 30px;
  box-sizing: border-box;
}
.main img {
  height: 100%;
  width: 300px;
}
.main a {
  margin-right: 20px;
}
</style>
