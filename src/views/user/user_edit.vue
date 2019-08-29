<template>
  <div>新增用户</div>
</template>
<script>
export default {
  name: 'user_edit',
  data () {
    return {

    }
  },
  mounted () {
    if (this.$route.params.id === '0') {
      console.log('$route.params.id,', this.$route.params.id === '0')
    }
  }
}
</script>
