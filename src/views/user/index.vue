<template>
  <div class="wrap">
       {{mes}}
       <div></div>
  </div>
</template>

<script>
 export default {
     name: 'User',
     data(){
         return {
             mes: 'test'
         }
     }
 }   
</script>


<style lang="scss" scoped>
   .wrap{
       width: 10rem;
       height: 10rem;
       background: red;
       &>div{
           width: 5rem;
           height: 5rem;
           background: green;
       }
   }
</style>