<template>
  <div class="wrap">
     
       <div class="banner"></div>

       <div class="form">
          <div class="item line">
            <input type="text" class="item-left phone" placeholder="请输入手机号" />
          </div>

           <div class="item clear line">
            <input type="text" class="item-left left yzm" placeholder="输入短信验证码" />
            <div class="right yzm-txt item-right yzm-line">
               获取验证码
            </div>
          </div>

           <div class="item">
            <input type="text" class="item-left" placeholder="请输入手机号" />
          </div>
       </div>
       <hello-world></hello-world>
  </div>
</template>

<script>
import helloWorld from '../../components/HelloWorld.vue'
 export default {
     name: 'user',
     components: {helloWorld},
     data(){
         return {
             mes: 'test'
         }
     }
 }   
</script>


<style lang="scss" scoped>
   @import '../../style/fn.scss';
   .wrap{
       width: 100%;
       height: 100%;
       background: #f5f5f5;
       .banner{
           width: 100%;
           height: setrem(360);
           background: url(../../assets/banner.jpg) no-repeat;
           background-size: 100% 100%;
       }
       .form{
           width: 90%;
           margin: setrem(-10) 0 0 5%;
           background: #fff;
           border-radius: setrem(10);
           box-shadow: setrem(2) setrem(2) 2 rgba(0,0,0,.6);
           padding: 0 setrem(30);
           .item{
               height: setrem(100);
               box-sizing: border-box;
               position: relative;
                .item-left{
                    height: 100%;
                    font-size: setrem(30);
                }
                .item-right{
                    height: 100%;
                    line-height: setrem(100);
                    color: #2e9cf6;
                    font-size: setrem(32);
                    position: relative;
                }
                .phone{
                    width: 100%;
                }
                .yzm{
                    width: 60%;
                }
                .yzm-txt{
                    width: 40%;
                    &:after{
                        content: "";
                        position: absolute;
                        background: #e3e3e3;
                        width: setrem(2);
                        height: setrem(120);
                        transform: scaleY(.5);
                        top: -10%;
                        left: 0;
                    }
                }
           }
           .line:after{
               content: "";
               width: 200%;
               bottom: 0;
               transform: scaleX(.5);
               background: #e3e3e3;
               position: absolute;
               height: setrem(2);
               left: -50%;
           }
       }
   }
</style>