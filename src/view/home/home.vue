<template>
    <div class="main-wrap">
        <header>
            <div class="container">
                <p class="left">cl<span></span>不念过去，不畏将来</p>
                <ul class="btn-box right">
                    <li>所有文章</li>
                    <li>实力demo</li>
                    <li>生活随笔</li>
                </ul>
            </div>
        </header>
        <div class="overviews">
            <transition-group name="fade" tag="div">
                <div class="bg1" :key="0" v-if="bgIndex === 0"></div>
                <div class="bg2" :key="1" v-if="bgIndex === 1"></div>
                <div class="bg3" :key="2" v-if="bgIndex === 2"></div>
                <div class="bg4" :key="3" v-if="bgIndex === 3"></div>
            </transition-group>
        </div>
        <section>
            <div class="content">
                <transition-group name="slide" tag="div">
                    <div class="con-text" v-show="bgIndex === 0" :key="0">
                        <p>从此故乡再无乡愁，</p>
                        <p>从此青春再无当时。</p>
                        <p>你爱诗歌，我便学着写作；</p>
                        <p>你爱远方，我便离开故乡。</p>
                    </div>
                    <div class="con-text" v-show="bgIndex === 1" :key="1">
                        <p>置身在灯红酒绿的城市，</p>
                        <p>站在车水马龙的街道，</p>
                        <p>灯光的美，</p>
                        <p>夜晚的静，</p>
                        <p>更加衬托出了人们的寂寞。</p>
                    </div>
                    <div class="con-text" v-show="bgIndex === 2" :key="2">
                        <p>神灯神灯，我有一个愿望，</p>
                        <p>我不要金钱、权利；</p>
                        <p>也不要长生、不老。</p>
                        <p>我只想要遇到一个女孩，</p>
                        <p>陪她哭，陪她笑，陪她一起细水长流。</p>
                    </div>
                    <div class="con-text" v-show="bgIndex === 3" :key="3">
                        <p>越了解，越喜欢；</p>
                        <p>越喜欢，越害怕。</p>
                        <p>你转身向北，</p>
                        <p>侧脸还是那么美，</p>
                        <p>我用眼光去追，竟听见你的泪。</p>
                    </div>
                </transition-group>
            </div>
            <div class="btn-go">
                <button @click="toPerson">Let's Go</button>
            </div>
            <!-- 背景切换导航 -->
            <div class="slide-nav">
                <i v-for="n in 4" :key="n" :class="{active: n === bgIndex+1}" @click="changeBg(n)"></i>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data (){
        return {
            bgIndex: 0,
            timeCount: null
        }
    },
    methods: {
        // 切换背景
        changeBg(n){
            this.bgIndex = n - 1;
        },
        toPerson(){
            this.$router.push({path: '/cl'})
        }
    },
    mounted(){
        this.timeCount = setInterval(()=>{
            console.log('出发了')
            this.bgIndex === 3 ? this.bgIndex = 0 : this.bgIndex ++;
        }, 3000)
    },
    destroyed(){
        clearInterval(this.timeCount)
    }
}
</script>
<style lang="less">
.main-wrap{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    header{
        position: relative;
        height: 60px;
        width: 100%;
        line-height: 60px;
        color: #fff;
        z-index: 2;
        border-bottom: 1px solid rgba(255,255,255,0.3);
        .container{
            width: 1000px;
            margin: 0 auto;
            p span{
                display: inline-block;
                height: 18px;
                width: 1px;
                background-color: #fff;
                margin: -5px 10px;
            }
            ul.btn-box{
                li{
                    float: left;
                    margin-right: 40px;
                    cursor: pointer;
                }
            }
        }
    }
    .overviews{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        div{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            &.bg1{
                background: url('../../assets/img/22.jpg') no-repeat 50% 50%;
                background-size: cover;
            }
            &.bg2{
                background: url('../../assets/img/33.jpg') no-repeat 50% 50%;
                background-size: cover;
            }
            &.bg3{
                background: url('../../assets/img/img01.jpg') no-repeat 50% 50%;
                background-size: cover;
            }
            &.bg4{
                background: url('../../assets/img/img04.jpg') no-repeat 50% 50%;
                background-size: cover;
            }
        }
    }
    section{
        .content{
            // padding-top: 30px;
            height: 250px;
            font-size: 18px;
            color: #fff;
            overflow: hidden;
            position: relative;
            .con-text{
                position: absolute;
                top: 0px;
                width: 100%;
            }
            p{
                margin-bottom: 20px;
                &:first-of-type{
                    margin-top: 30px;
                }
            }
        }
        .btn-go{
            position: absolute;
            bottom:  200px;
            width: 100%;
            button{
                width: 160px;
                height: 50px;
                line-height: 50px;
                font-size: 20px;
                color: #fff;
                background-color: transparent;
                border: 1px solid rgba(255,255,255,0.5);
                border-radius: 5px;
                cursor: pointer;
                &:hover{
                    background-color: rgba(255,255,255,0.5);
                }
            }
        }
        .slide-nav{
            text-align: center;
            position: absolute;
            bottom: 60px;
            width: 100%;
            i{
                display: inline-block;
                width: 14px;
                height: 14px;
                background-color: #555;
                margin-right: 10px;
                border-radius: 14px;
                cursor: pointer;
                &.active{
                    background-color: #fff;
                }
            }
        }
    }
    // 渐进渐出 
    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    // 滑进滑出
    .slide-enter-active{
        transition: all .8s;
    }
    .slide-enter{
        transform: translateY(-100%)
    }
    .slide-leave-active{
        // transition:  all 0.2s;
    }
    .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
        // transform: translateY(-100%)
        //  opacity: 0;
    }
}
</style>


