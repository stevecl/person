<template lang="">
  <div>
    <router-view></router-view>
    <bubbleHint></bubbleHint>
    <loading></loading>
  </div>
</template>
<script>
export default {
  mounted() {},
  methods: {}
};
</script>
<style style="css">
body {
  font-size: 20px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clear {
  clear: both;
}
a:hover {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>
