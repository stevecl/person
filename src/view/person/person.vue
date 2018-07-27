<template>
    <div class="test_1">
        <canvas class="cav" id="loginCanvas">
            <!-- <img src="../../assets/img/login_bg.png" alt=""> -->
        </canvas>
    </div>
</template>

<script>
import can from '../../assets/lib/animaCanvas';
export default {
    data (){
        return {

        }
    },
    mounted (){
        can()
    }
}
</script>
<style lang="less" scoped>
.test_1{
    height: 100%;
    width: 100%;
    background-color: #fff;
    position: relative;
    .cav{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            min-width: 100%;
            min-height: 100%;
        }
    }
}
</style>

